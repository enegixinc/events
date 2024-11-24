import { Topic, TopicType } from './topic';
import { ref, watch } from 'vue';

/**
 * Hook to log events for a single topic.
 * @param topic - The topic to log events for.
 */
export const useTopicLogger = <T extends TopicType>(topic: Topic<T>) => {
  const logger = topic.logger;
  const log = ref({ ...logger.logs });

  // Override the logSuccess method to update the log ref.
  const originalLogSuccess = logger.logSuccess;
  logger.logSuccess = async (...args: any[]) => {
    await originalLogSuccess.apply(logger, args);
    log.value = { ...logger.logs }; // Ensure a fresh reference to trigger reactivity.
  };

  return {
    log,
  };
};

/**
 * Hook to manage logs for multiple topics.
 * @param topics - An array of topics to watch for log changes.
 */
export const useTopicsLogger = <T extends TopicType>(topics: Topic<T>[]) => {
  const logs = ref<Array<{ topicName: string; logs: Record<string, unknown> }>>(
    []
  );

  topics.forEach((topic) => {
    watch(
      () => useTopicLogger(topic).log.value,
      (newLogs) => {
        console.log('newLogs', newLogs);
        const existingEntry = logs.value.find(
          (logEntry) => logEntry.topicName === topic.topicName
        );

        if (existingEntry) {
          existingEntry.logs = { ...newLogs };
        } else {
          logs.value.push({
            topicName: topic.topicName,
            logs: { ...newLogs },
          });
        }
      },
      { immediate: true, deep: true }
    );
  });

  return {
    logs,
  };
};
