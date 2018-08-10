export class LessonServiceClient {
  LESSON_URL = 'https://cryptic-ridge-94740.herokuapp.com/api/module/MODULE_ID/lesson';
  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
