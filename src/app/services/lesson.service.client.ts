export class LessonServiceClient {
  LESSON_URL = 'http://localhost:8080/api/module/MODULE_ID/lesson';
  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
