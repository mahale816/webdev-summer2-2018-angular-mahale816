import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) {
    this.updateUser = this.updateUser.bind(this);
  }

  user;
  course;
  courseName;
  username;
  password;
  firstName;
  lastName;
  email;
  phone;
  sections = [];
  enrollment;

  updateUser() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.phone = this.phone;
    this.service.updateUser(this.user)
      .then(user =>
        this.user = user
      )
      .then(() => this.router.navigate(['home']));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['home']));

  }

  unEnroll(section) {
    // alert(section._id);
    this.sectionService
      .unEnrollStudentInSection(section._id)
      .then(() => {
        this.sectionService.findSectionsForStudent()
          .then(sections => this.sections = sections);
      });
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.phone = user.phone;
          this.user = user;
        }
      );

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections)
      .then(() => console.log(this.user));
  }

}
