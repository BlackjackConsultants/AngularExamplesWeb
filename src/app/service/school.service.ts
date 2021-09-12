import { Injectable } from '@angular/core';
import { School } from '../models/school';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryFn, DocumentChangeAction, CollectionReference } from 'angularfire2/firestore';
import { map } from 'rxjs/internal/operators/map';
import { TeacherService } from './teacher.service';
import { Teacher } from '../models/teacher';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schoolCollectionRef!: AngularFirestoreCollection<School>;
  schoolsObs!: Observable<School[]>;
  schoolObs!: Observable<School>;

  constructor(public afs: AngularFirestore,
    private dateService: DateService,
    private teacherService: TeacherService) { }

  /*
   * Returns an observable that streams live school list. Note, this functionality can
   * be static. do in future changes.
   */
  getSchools(ref?: QueryFn): Observable<School[]> {
    return this.getQueryableCollection(ref).valueChanges();
  }

  /*
   * gets teachers for the school.  if not lazy loaded then call it.
   */
  getTeachers(schoolId: string | undefined): Observable<Teacher[]> {
    return this.teacherService.getTeachersBySchool(schoolId);
  }

  /*
   * NOTE DO NOT DO GETS LIKE THIS. DO NOT SUBCRIBE INSIDE A SERVICE. SEE TEACHER SERVICE FOR GETS.
   */
  getSchoolsById(id: string | undefined): Observable<School> {
    this.schoolObs = new Observable<School>(observer => {
      // let query: QueryFn | undefined = (ref: { where: (arg0: string, arg1: string, arg2: string | undefined) => any; }) => ref.where('id', '==', id);
      // this.getQueryableCollection(query).valueChanges().pipe(map(((changes: { id: string | undefined; }[]) => {
      //   return changes.map((doc: { id: string | undefined; }) => {
      //     let school = new School();
      //     school.id = doc.id;
      //     this.teacherService.getTeachersBySchool(school.id).subscribe(teachers => {
      //       //console.log(items);
      //       school.teachers = teachers;
      //       observer.next(school);
      //     });
      //   });
      // }) as any)).subscribe(school => { });
    });
    return this.schoolObs;
  }

  /*
   * here i am using the batch method, but you can use a transaction update if you need to
   * do a get prior to saving.
   */
  addSchoolWithBatch(school: School): Promise<void> {
    if (school.id != null) {
      throw Error("adding when update needed.");
    }
    school.id = this.afs.createId();

    var batch = this.afs.firestore.batch();

    // save teacher
    if (school && school.teachers) {
      for (var i = 0; i < school?.teachers.length; i++) {
        var teacherRef = this.teacherService.getCollection().doc();
        var teacher = school.teachers[i];
        teacher.id = teacherRef.id;
        teacher.school = school;
        batch.set(teacherRef, { ...teacher });
      }
    }

    // save school
    var schoolRef = this.getCollection().doc(school.id);
    //delete school.teachers;

    batch.set(schoolRef, {
      ...{
        name: school.name || null,
        updateId: this.dateService.convertToDecimal(new Date())
      }
    });

    return batch.commit();
  }

  delete(school: School | undefined) {
    let docRef = this.getCollection().doc(school?.id);
    docRef.delete();
  }

  update(school: School | undefined): Promise<void> {
    let docRef = this.getCollection().doc(school?.id);
    return this.afs.firestore.runTransaction(transaction => {
      return transaction.get(docRef).then(doc => {
        // use update id to find out 
        let updateId = 1; // = doc?.data()?.updateId == null ? 1 : doc.data().updateId++;
        // if (doc != undefined && doc.data() != undefined ) {
        //   updateId = doc.data().updateId;
        // }

        school?.teachers?.forEach(teacher => {
          teacher.school = school;
          this.teacherService.updateWithTransaction(teacher, transaction);
        });
        transaction.set(docRef, { name: school?.name || null, updateId: updateId }, { merge: true })
      });
    });
  }

  /*
   * get collection for queries
   */
  getQueryableCollection(query?: QueryFn | undefined): AngularFirestoreCollection<School> {
    if (query) {
      return this.afs.collection('schools', query);
    }
    return this.afs.collection('schools')
  }

  /*
   * get collection for saving. CRUD operations. You can get by id.
   */
  getCollection(): CollectionReference {
    return this.afs.firestore.collection('schools')
  }
}
