import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  quizId = '';
  quiz;

  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(() => {
        this.router.navigate(['/home']);
      })

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.service
        .findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
