export class WidgetServiceClient {
  WIDGET_URL = 'https://cryptic-ridge-94740.herokuapp.com/api/topic/TOPIC_ID/widget';
  findAllWidgetsForTopic(topicId) {
    return fetch(this.WIDGET_URL.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
}
