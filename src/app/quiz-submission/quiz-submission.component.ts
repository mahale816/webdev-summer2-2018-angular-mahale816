import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submission',
  templateUrl: './quiz-submission.component.html',
  styleUrls: ['./quiz-submission.component.css']
})
export class QuizSubmissionComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute,
              private userService: UserServiceClient) {
    this.route.params.subscribe(params => this.getSubmissions(params));
  }

  userSubmissions = [];
  adminSubmissions = [];
  quizID;
  courseId;
  username;
  user;
  searchname;
  searchedUserSubmissions = [];

  // getUserSubmissions(searchname) {
  //   this.userService.findUserByUsername(searchname)
  //     .then(function (response) {
  //         const _user = response;
  //         for (var i = 0; i < this.adminSubmissions.length; i++) {
  //           console.log(allSubmissions[i]);
  //         }
  //     });
  //   console.log(this.searchedUserSubmissions);
  // }

  quizUser(userId) {
    this.userService.findUserById(userId)
      .then(user => {
        this.user = user;
      });
  }

  getSubmissions(params) {
    this.quizID = params['quizId'];
    this.courseId = params['courseId'];
    this.service.findAllSubmissionsForStudent(this.quizID)
      .then(response => this.userSubmissions = response);
    this.service.findAllSubmissionsForQuiz(this.courseId, this.quizID)
      .then(response => this.adminSubmissions = response);
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
          this.username = user.username;
        }
      );
  }

}
