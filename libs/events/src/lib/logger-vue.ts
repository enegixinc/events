import { Topic, TopicType } from './topic';
import { ref } from 'vue';

export const useTopicLogger = <T extends TopicType>(topic: Topic<T>) => {
  const logger = topic.logger;
  const log = ref(Object.assign({}, logger.getLogs()));

  const superLogPublish = logger.logPublish;
  logger.logPublish = (method: string, event: string) => {
    console.log('Vue Logger: ', method, event);
    superLogPublish.call(logger, method, event);
    log.value = Object.assign({}, logger.getLogs());
    console.log('vue logger', log.value);
  };

  return {
    log,
  };
};
