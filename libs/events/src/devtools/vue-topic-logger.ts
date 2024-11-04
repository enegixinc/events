import { TopicLoggerState, useTopicsLoggerStore } from '../lib/state';
import { onMounted, ref } from 'vue';

/**
 * Hook to manage logs for multiple topics using Zustand store.
 */
export const useTopicsLogger = () => {
  const state = ref<Pick<TopicLoggerState, 'topics'>>({
    topics: [],
  });

  onMounted(() => {
    const unsubscribe = useTopicsLoggerStore.subscribe((storeState) => {
      state.value.topics = [...storeState.topics];
    });

    onMounted(() => {
      return () => {
        unsubscribe();
      };
    });
  });

  return state;
};
