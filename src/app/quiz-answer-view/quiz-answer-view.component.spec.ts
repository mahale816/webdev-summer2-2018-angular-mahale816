import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerViewComponent } from './quiz-answer-view.component';

describe('QuizAnswerViewComponent', () => {
  let component: QuizAnswerViewComponent;
  let fixture: ComponentFixture<QuizAnswerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAnswerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAnswerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
