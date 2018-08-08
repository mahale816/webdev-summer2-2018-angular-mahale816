export class WidgetServiceClient {
  WIDGET_URL = 'http://localhost:8080/api/topic/TOPIC_ID/widget';
  findAllWidgetsForTopic(topicId) {
    return fetch(this.WIDGET_URL.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
}
