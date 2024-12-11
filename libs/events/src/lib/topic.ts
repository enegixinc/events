import { useTopicsLoggerStore } from './state';
import { EventsManager } from './core';

export interface TopicType {
  [event: string]: unknown;
}

type TopicConfig = {
  topicName: string;
};

export class Topic<T extends TopicType> extends EventsManager<T> {
  public topicName: string;

  constructor(
    config: TopicConfig = {
      topicName: `Topic-${useTopicsLoggerStore.getState().topics.length}`,
    }
  ) {
    super();
    this.topicName = config.topicName;
    useTopicsLoggerStore.getState().topics.push({
      topicName: this.topicName,
      events: [],
    });
  }
}
