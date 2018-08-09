import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  courseTitle = '';
  section;
  username;
  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }
  findSectionById(sectionId) {
    this.service.findSectionById(sectionId)
      .then(section => {
        this.sectionName = section.name;
        this.seats = section.seats;
        this.section = section;
      });
  }

  updateSection(sectionId) {
    this.section.sectionName = this.sectionName;
    this.section.seats = this.seats;
    this.service.updateSection(this.section, sectionId)
      .then(section =>
        this.section = section
      )
      .then(() => {
        this.loadSections(this.courseId);
        this.seats = '';
        this.sectionName = '';
      });
  }

  deleteSection(sectionId) {
    this.service
      .deleteSection(sectionId)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }
  ngOnInit() {
    this.courseService
      .findCourseById(this.courseId)
      .then(course => {
        this.courseTitle = course.title;
        this.sectionName = '';
      });
    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
      });
  }
}
