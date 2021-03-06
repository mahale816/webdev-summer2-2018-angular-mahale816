import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './services/section.service.client';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/topic.service.client';
import {WidgetPreviewComponent} from './widget-preview/widget-preview.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {EssayQuestionComponent} from './essay-question/essay-question.component';
import {FillBlanksQuestionComponent} from './fill-blanks-question/fill-blanks-question.component';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {MultipleChoiceQuestionComponent} from './multiple-choice-question/multiple-choice-question.component';
import { QuizSubmissionComponent } from './quiz-submission/quiz-submission.component';
import { QuizAnswerViewComponent } from './quiz-answer-view/quiz-answer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetPreviewComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
    TopicPillsComponent,
    QuizListComponent,
    QuizTakerComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
    QuizSubmissionComponent,
    QuizAnswerViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    TopicServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
