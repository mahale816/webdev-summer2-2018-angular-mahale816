export class TopicServiceClient {
  TOPIC_URL = 'http://localhost:8080/api/lesson/LESSON_ID/topic';
  findTopicforLesson(lessonId) {
    return fetch(this.TOPIC_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
