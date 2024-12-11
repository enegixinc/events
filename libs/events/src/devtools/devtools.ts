import { setupDevtoolsPlugin } from '@vue/devtools-api';
import { App, watch } from 'vue';
import { Topic } from '../lib/topic';
import { useTopicLogger } from './logger-vue';

const inspectorId = 'events-vue-devtools';
const stateType = 'routing properties';

export const setupDevtools = (app: App, topics: Topic<any>[] = []) => {
  setupDevtoolsPlugin(
    {
      id: inspectorId,
      label: 'Events',
      logo: 'https://www.svgrepo.com/show/375484/pubsub.svg',
      packageName: 'events',
      app,
      componentStateTypes: [stateType],
    },
    (api) => {
      api.addInspector({
        id: inspectorId,
        label: 'Events',
        treeFilterPlaceholder: 'Search events',
        icon: 'https://www.svgrepo.com/show/375484/pubsub.svg',
        stateFilterPlaceholder: 'Filter events',
      });

      const topicsLogger = topics.map(
        (topic) => useTopicLogger(topic).log.value
      );
      const topicsLoggerRef = topics.map((topic) => useTopicLogger(topic));

      topicsLoggerRef.forEach((logger) => {
        watch(
          () => logger.log,
          () => {
            console.log('Req-rendering devtools');
            api.sendInspectorState(inspectorId);
            api.sendInspectorTree(inspectorId);
          },
          { immediate: true, deep: true }
        );
      });

      // Populate the inspector tree with topics and events
      api.on.getInspectorTree((payload) => {
        if (payload.inspectorId === inspectorId) {
          payload.rootNodes = topicsLogger.map(({ events, topic }) => ({
            id: topic,
            label: topic,
            children: events.map((event) => ({
              id: `${topic}:${event.eventKey}`,
              label: event.eventKey,
              tags: [
                {
                  label: `${event.publishers.length} publishers`,
                  textColor: 0x000000,
                  backgroundColor: 0x00ff00,
                },
                {
                  label: `${event.subscribers.length} subscribers`,
                  textColor: 0x000000,
                  backgroundColor: 0x00ffff,
                },
              ],
            })),
            tags: [
              {
                label: `${events.length} events`,
                textColor: 0x000000,
                backgroundColor: 0xffcc00,
              },
              {
                label: `${events.reduce(
                  (acc, event) => acc + event.publishers.length,
                  0
                )} publishers`,
                textColor: 0x000000,
                backgroundColor: 0x00ff00,
              },
              {
                label: `${events.reduce(
                  (acc, event) => acc + event.subscribers.length,
                  0
                )} subscribers`,
                textColor: 0x000000,
                // baby blue
                backgroundColor: 0x00ffff,
              },
            ],
          }));
        }
      });

      // Provide detailed state for selected events
      api.on.getInspectorState((payload) => {
        if (payload.inspectorId === inspectorId) {
          const [topic, eventKey] = payload.nodeId.split(':');
          const selectedTopic = topicsLogger.find(
            (logger) => logger.topic === topic
          );
          if (selectedTopic) {
            const event = selectedTopic.events.find(
              (event) => event.eventKey === eventKey
            );

            if (event) {
              payload.state = {
                Publishers: event.publishers.map((pub, index) => ({
                  key: `Publisher ${index + 1}`,
                  value: {
                    EventKey: pub.eventKey,
                    CalledCount: pub.calledCount,
                    SuccessCount: pub.successCount,
                    ErrorCount: pub.errorCount,
                    File: pub.originalPosition.file,
                    Line: pub.originalPosition.line,
                    Column: pub.originalPosition.column,
                    Code: pub.originalPosition.codeBlock,
                  },
                })),
                Subscribers: event.subscribers.map((sub, index) => ({
                  key: `Subscriber ${index + 1}`,
                  value: {
                    EventKey: sub.eventKey,
                    CalledCount: sub.calledCount,
                    SuccessCount: sub.successCount,
                    ErrorCount: sub.errorCount,
                    File: sub.originalPosition.file,
                    Line: sub.originalPosition.line,
                    Column: sub.originalPosition.column,
                    Code: sub.originalPosition.codeBlock,
                  },
                })),
              };
            }
          }
        }
      });
    }
  );
};
