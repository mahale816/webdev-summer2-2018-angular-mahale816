export class TopicServiceClient {
  TOPIC_URL = 'https://cryptic-ridge-94740.herokuapp.com/api/lesson/LESSON_ID/topic';
  findTopicforLesson(lessonId) {
    return fetch(this.TOPIC_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
