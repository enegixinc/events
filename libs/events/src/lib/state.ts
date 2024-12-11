import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { StackFrame } from 'stacktrace-parser';
import { getOriginalPosition, OriginalPosition } from './stack';

type MethodType = 'publisher' | 'subscriber';

type Method = {
  type: MethodType;
  eventKey: string;
  data: any;
  originalPosition: OriginalPosition;
};

type MethodLog = Method & {
  calledCount: number;
  successCount: number;
  errorCount: number;
};

type Event = {
  eventKey: string;
  publishers: MethodLog[];
  subscribers: MethodLog[];
};

type TopicLog = {
  topicName: string;
  events: Event[];
};

type TopicLoggerState = {
  topics: Array<TopicLog>;
  logSuccess: (
    topicName: string,
    type: 'publishers' | 'subscribers',
    eventKey: string,
    callerStack: NonNullable<StackFrame>,
    data?: any
  ) => Promise<void>;
};

export const useTopicsLoggerStore = create<TopicLoggerState>()(
  devtools((set, get) => ({
    topics: [],

    logSuccess: async (topicName, type, eventKey, callerStack, data) => {
      const { topics } = get();

      const originalPosition = await getOriginalPosition(callerStack.file, {
        line: callerStack.lineNumber as number,
        column: callerStack.column as number,
      });

      let topicLog = topics.find((topic) => topic.topicName === topicName);
      if (!topicLog) {
        topicLog = { topicName, events: [] };
        topics.push(topicLog);
      }

      const eventIndex = topicLog.events.findIndex(
        (event) => event.eventKey === eventKey
      );
      if (eventIndex === -1) {
        topicLog.events.push({ eventKey, publishers: [], subscribers: [] });
      }

      const event = topicLog.events[eventIndex] || {
        eventKey,
        publishers: [],
        subscribers: [],
      };

      const methodType = type === 'publishers' ? 'publishers' : 'subscribers';
      const methods = event[methodType];
      let method = methods.find(
        (m) => m.originalPosition.line === originalPosition.line
      );

      if (!method) {
        method = {
          type: type === 'publishers' ? 'publisher' : 'subscriber',
          eventKey,
          data: null,
          originalPosition,
          calledCount: 0,
          successCount: 0,
          errorCount: 0,
        };
        methods.push(method);
      }

      method.calledCount++;
      method.successCount++;
      method.data = data;

      set({
        topics,
      });
    },
  }))
);
