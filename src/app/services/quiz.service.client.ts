
import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  submitQuiz =  quiz =>
    fetch('https://course-manager-node-server.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())


  findAllQuizzes = () =>
    fetch('https://course-manager-node-server.herokuapp.com/api/quiz')
      .then(response => response.json())

  findQuizById = quizId =>
    fetch('https://course-manager-node-server.herokuapp.com/api/quiz/' + quizId)
      .then(response => response.json())

  findQuizzesforCourse = courseId =>
    fetch('https://course-manager-node-server.herokuapp.com/api/course/' + courseId + '/quiz')
      .then(response => response.json())

  findAllSubmissionsForQuiz = (courseID, qID) =>
    fetch('https://course-manager-node-server.herokuapp.com/api/course/' + courseID + '/quiz/' + qID + '/submission', {
      credentials: 'include'
    }).then(response => response.json())

  findAllSubmissionsForStudent = qID =>
    fetch('https://course-manager-node-server.herokuapp.com/api/quiz/' + qID + '/submission', {
      credentials: 'include'
    }).then(response => response.json())

  findSubmissionById = (qID, submissionId) =>
    fetch('https://course-manager-node-server.herokuapp.com/api/quiz/' + qID + '/submission/' + submissionId, {
      credentials: 'include'
    }).then(response => response.json())

}
