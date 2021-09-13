import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryFn, DocumentChangeAction, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { map } from 'rxjs/internal/operators/map';
import { School } from '../models/school';
// import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherCollectionRef!: any;
  teachersObservable!: Observable<Teacher[]>;
  teacherDoc!: any;
  public afs: any

  constructor() { }

  getTeachers(): Observable<Teacher[]> {
    return this.getQueryableCollection().valueChanges();
  }

  /*
   * Returns an observable that streams live teacher list. Note, this functionality can
   * be static. do in future changes.
   */
  getTeachersBySchool(schoolId: string | undefined): Observable<Teacher[]> {
    let query: any = ref => ref.where('schoolId', '==', schoolId);
    return this.getQueryableCollection(query).valueChanges();
  }

  /*
   * Returns an observable that streams live teacher list. Note, this functionality can
   * be static. do in future changes.
   */
  getTeachersBySchoolWithMetadata(schoolId: string | undefined): Observable<Teacher[]> {
    let query: any = ref => ref.where('schoolId', '==', schoolId);
    this.teachersObservable = this.getQueryableCollection(query).snapshotChanges().pipe(map(actions => (actions as any).map(doc => {
      let data = doc.payload.doc.data();
      return data;
    })));
    return this.teachersObservable;
  }

  /*
   * Returns an observable that streams live teacher list. Note, this functionality can
   * be static. do in future changes.
   */
  getTeachersById(id: string | undefined) : Observable<Teacher[]> | undefined {
    // let query: QueryFn | undefined = id ? ref => ref.where('id', '==', id) : null;
    // this.teachersObservable = this.getQueryableCollection(query).valueChanges().pipe(map((_changes: any => {
    //   return _changes2.map(doc => {
    //     let teacher = new Teacher();
    //     let school = new School();
    //     school.id = doc.schoolId;
    //     teacher.id = doc.id;
    //     teacher.firstName = doc.firstName;
    //     teacher.lastName = doc.lastName;
    //     teacher.school = school;  // this is how you load refences. if you want more do a get in the caller.
    //     return teacher;
    //   });
    // }) as any));
    // return this.teachersObservable;
    return undefined;
  }

  /*
   * here you can use the update or set method. If you use the set method it updates
   * if the document exists and creates a new one if it does not.  If you use the update
   * method, it will create throw an error.
   */
  update(teacher: Teacher) {
    // create id if new doc
    if (!teacher.id)
      teacher.id = this.afs.createId();
    let docRef = this.getCollection().doc(teacher.id);
    // create new or update existing document
    docRef.set({...{
      id: teacher.id,
      firstName: teacher.firstName || null,
      lastName: teacher.lastName || null,
      schoolId: teacher?.school?.id
    }});
  }

  delete(teacher: Teacher) {
    this.teacherDoc = this.afs.doc(`teachers/${teacher.id}`);
    this.teacherDoc.delete();
  }

  /*
   * updates a teacher that is inside a transaction. 
   */
  updateWithTransaction(teacher: Teacher, transaction: any) {
    if (!teacher.id) 
      teacher.id = this.afs.createId();
    let docRef = this.getCollection().doc(teacher.id);
    transaction.set(docRef, {
      id: docRef.id,
      firstName: teacher?.firstName || null,
      lastName: teacher?.lastName || null,
      schoolId: teacher?.school?.id
    }, { merge: true });
  }

  /*
   * get collection for queries
   */
  getQueryableCollection(query?: any): any {
    if (query) {
      return this.afs.collection('teachers', query);
    }
    return this.afs.collection('teachers')
  }

  /*
   * get collection for saving
   */
  getCollection(): any {
    return this.afs.firestore.collection('teachers')
  }
}