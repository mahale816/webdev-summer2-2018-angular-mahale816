import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/coruse.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  courses: Course[] = [];
  sections = [];
  username;

   isEnrolled(courseId) {
     let flag = true;
     for (const sec of this.sections) {
       if (sec.section == null) {
         return flag;
       }
       if (sec.section.courseId === courseId) {
         flag = false;
       }
     }
     return flag;
   }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['home']));

  }

  ngOnInit() {
     this.username = '';
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
      });
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);
  }
}
