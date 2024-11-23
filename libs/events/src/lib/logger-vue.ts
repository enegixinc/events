import { Topic, TopicType } from './topic';
import { ref } from 'vue';

export const useTopicLogger = <T extends TopicType>(topic: Topic<T>) => {
  const logger = topic.logger;
  const log = ref(Object.assign({}, logger.logs));

  const superLogEvent = logger.logSuccess;
  logger.logSuccess = (...args) => {
    superLogEvent.call(logger, ...args);
    log.value = Object.assign({}, logger.logs);
  };

  return {
    log,
  };
};
