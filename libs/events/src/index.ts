import { Topic } from './lib/topic';

export * from './lib/core';
export * from './lib/topic';
export * from './lib/topicLogger';
export * from './devtools/logger-vue';

const globalTopic = new Topic({
  topicName: 'global',
});

export const publish = globalTopic.publish.bind(globalTopic);
export const subscribe = globalTopic.subscribe.bind(globalTopic);
export const unsubscribe = globalTopic.unsubscribe.bind(globalTopic);
export const subscribeOnce = globalTopic.subscribeOnce.bind(globalTopic);
export const unsubscribeAll = globalTopic.unsubscribeAll.bind(globalTopic);
