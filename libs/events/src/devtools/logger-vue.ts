import { ref, watch } from 'vue';
import { Topic, TopicType } from '../lib/topic';
import { useTopicsLoggerStore } from '../lib/state';

/**
 * Hook to log events for a single topic using Zustand store.
 * @param topic - The topic to log events for.
 */
export const useTopicLogger = <T extends TopicType>(topic: Topic<T>) => {
  const topicName = topic.topicName;

  // Create a reactive reference to the logs
  const log = ref(useTopicsLoggerStore.getState());

  // Subscribe to store changes for this topic
  const unsubscribe = () => {
    console.log('Unsubscribing from logs for topic:', topicName);
  };

  return {
    log,
    unsubscribe,
  };
};

/**
 * Hook to manage logs for multiple topics using Zustand store.
 * @param topics - An array of topics to watch for log changes.
 */
export const useTopicsLogger = <T extends TopicType>(topics: Topic<T>[]) => {
  const logs = ref<Array<{ topicName: string; logs: Record<string, unknown> }>>(
    []
  );

  // Subscribe to logs for all topics
  topics.forEach((topic) => {
    const { log, unsubscribe } = useTopicLogger(topic);

    watch(
      () => log.value,
      (newLogs) => {
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

    // Optionally manage unsubscribing if needed
    topic.unsubscribe = unsubscribe;
  });

  return {
    logs,
  };
};
