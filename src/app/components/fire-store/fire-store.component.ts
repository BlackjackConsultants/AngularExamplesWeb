import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../service/teacher.service';
import { SchoolService } from '../../service/school.service';
import { School } from '../../models/school';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fire-store',
  templateUrl: './fire-store.component.html',
  styleUrls: ['./fire-store.component.css']
})
export class FireStoreComponent implements OnInit {
  schoolSub: Subscription = new Subscription;
  teacher: Teacher = new Teacher();
  school: School = new School();
  teacherSearchId: string | undefined = '2bVYhIV8Ga1H0nPUFd5q';
  schools: School[] = [];
  schoolSearchId!: string | undefined;

  constructor(private teacherService: TeacherService, private schoolService: SchoolService) { }

  ngOnInit() {
    if (this.school) {
      this.school.name = 'hml';
    }
    this.schoolService.getSchools().subscribe(schools => {
      if (schools.length > 0) {
        this.school = schools[0];
        this.schoolSearchId = this.school?.id;
      }
    });
    this.teacherService.getTeachers().subscribe(teachers => {
      if (teachers.length > 0) {
        this.teacher = teachers[0];
        this.teacherSearchId = this.teacher?.id;
      }
    });
  }

  getTeacher() {
    this.teacherService.getTeachersById(this.teacherSearchId)?.subscribe(tests => {
      this.teacher = tests[0];
    });
  }

  saveATeacher() {
    if (this.teacher != null && this.teacher.firstName != null) {
      this.teacherService.update(this.teacher);
    }
    else {
      alert('you are missing teacher first name!!!!!!!')
    }
  }

  /*
   * joins 2 collections in firestore (non is subcollection).  the method in the
   * component is responsible for loading what it wants. this is best method
   * because it allows for lazy loading.
   */
  joinTeacherAndStudents() {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
      if (this.schools.length > 0) {
        this.schoolSearchId = this.schools[0].id;
        this.schools.forEach(school => {
          this.schoolService.getTeachers(school.id).subscribe(teachers => {
            school.teachers = teachers;
          });
        })
      }
    });
  }

  saveSchoolAndTeachersInTransWithTrans() {
    this.schoolSub = this.schoolService.getSchoolsById(this.schoolSearchId).subscribe(school => {
      if (school) {
        this.school = school;
        this.school?.teachers?.push(new Teacher('kaka', this.school));
        this.school?.teachers?.push(new Teacher('fuaka', this.school));
        this.schoolService.update(this.school).then((val) => {
          console.debug('successfully saved.');
        }, (err) => {
          console.error('failed to save. err->' + err);
        });
        this.schoolSub?.unsubscribe();
      }
      else {
        alert('no schools found');
      }
    });
  }

  saveSchoolAndTeachersWithBatch() {
    debugger;
    //load a school
    var school = new School();
    school.name = 'hml';
    this.school = school;
    //update a school
    this.schoolService.addSchoolWithBatch(this.school).then((val) => {
      console.debug(val);
    }, (err) => {
      console.debug(err);
    });
  }

  getTeachersLive() {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
      if (this.schools.length > 0) {
        this.schoolSearchId = this.schools[0].id;
        this.schools.forEach(school => {
          this.teacherService.getTeachersBySchool(school.id).subscribe(teachers => {
            school.teachers = teachers;
          });
        })
      }
    });
  }

  getTeachersLiveWithSnapshot() {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
      if (this.schools.length > 0) {
        this.schoolSearchId = this.schools[0].id;
        this.schools.forEach(school => {
          this.teacherService.getTeachersBySchoolWithMetadata(school?.id).subscribe(teachers => {
            school.teachers = teachers;
          });
        })
      }
    });
  }

  getTeachers() {
    let subSchool = this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
      if (this.schools.length > 0) {
        this.schoolSearchId = this.schools[0].id;
        this.schools.forEach(school => {
          let subTeachers = this.teacherService.getTeachersBySchool(school.id).subscribe(teachers => {
            school.teachers = teachers;
            subTeachers.unsubscribe();
          });
        })
        subSchool.unsubscribe();
      }
    });
  }

  DeleteSchool() {
    this.schoolService.delete(this.school);
  }
}
