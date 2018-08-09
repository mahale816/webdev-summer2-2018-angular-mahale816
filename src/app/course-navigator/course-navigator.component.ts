import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router) {
  }
  courseId = '';
  courses = [];
  selectedCourseId = 0;
  widgets = [];
  sections = [];

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findAllSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  routeToSections() {
    this.router.navigate(['course/' + this.selectedCourseId + '/section']);
  }
  logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
