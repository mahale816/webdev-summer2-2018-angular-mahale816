import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];
  username;
  courseId;
  course;

  constructor(private courseService: CourseServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private service: QuizServiceClient) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
          this.username = user.username;
        }
      );

    this.courseService.findCourseById(this.courseId)
      .then(response => this.course = response);
    this.service.findQuizzesforCourse(this.courseId)
      .then(quizzes => this.quizzes = quizzes);
  }

}
