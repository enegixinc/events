import { setupDevtoolsPlugin } from '@vue/devtools-api';
import type { App } from 'vue';
import { useTopicLogger } from '../lib/logger-vue';
import { GreetingTopic } from '../../../../apps/vue-example/src/app/events';

const inspectorId = 'events-vue-devtools';
const stateType = 'routing properties';

export const setupDevtools = (app: App) => {
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

      const topicLogger = useTopicLogger(GreetingTopic);

      // Populate the inspector tree with topics and events
      api.on.getInspectorTree((payload) => {
        if (payload.inspectorId === inspectorId) {
          payload.rootNodes = [topicLogger.log.value].map(
            ({ events, topic }) => ({
              id: topic,
              label: topic,
              children: events.map((event) => ({
                id: `${topic}:${event.eventKey}`,
                label: event.eventKey,
              })),
            })
          );
        }
      });

      // Provide detailed state for selected events
      api.on.getInspectorState((payload) => {
        if (payload.inspectorId === inspectorId) {
          const [topic, eventKey] = payload.nodeId.split(':');
          if (topic === topicLogger.log.value.topic) {
            const event = topicLogger.log.value.events.find(
              (e) => e.eventKey === eventKey
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
