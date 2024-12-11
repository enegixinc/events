import { reactive, ref } from 'vue';
import { Topic, TopicType } from '../lib/topic';
import { TopicLoggerState, useTopicsLoggerStore } from '../lib/state';

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
 */
export const useTopicsLogger = () => {
  const state = reactive<Pick<TopicLoggerState, 'topics'>>({
    topics: [],
  });

  useTopicsLoggerStore.subscribe(({ topics }) => {
    console.log('Updating logs for multiple topics');
    state.topics = topics;
  });

  return state;
};
