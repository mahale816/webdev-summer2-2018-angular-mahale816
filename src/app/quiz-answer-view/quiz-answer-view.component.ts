import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answer-view',
  templateUrl: './quiz-answer-view.component.html',
  styleUrls: ['./quiz-answer-view.component.css']
})
export class QuizAnswerViewComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.getSubmission(params));
  }
  submission;
  title;
  answers;

  getSubmission(params) {
    const quizId = params['quizId'];
    const submissionId = params['submissionId'];

    this.service.findSubmissionById(quizId, submissionId)
      .then(response => {
        this.submission = response;
        this.title = response.title;
        this.answers = response.answers;
      });
  }
  ngOnInit() {
  }

}
