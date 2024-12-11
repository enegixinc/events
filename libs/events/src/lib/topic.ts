import * as stackTraceParser from 'stacktrace-parser';
import { useTopicsLoggerStore } from './state';
import { EventsManager } from './core';

export interface TopicType {
  [event: string]: unknown;
}

export function LogMethod<T extends TopicType>(
  target: Topic<T>,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  console.log('LogMethod called', target, propertyKey, descriptor);
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    const stack = new Error().stack as string;
    const parsedStack = stackTraceParser.parse(stack);
    const caller = parsedStack[1];
    if (!caller.file || !caller.lineNumber || !caller.column) {
      throw new Error('Cannot get caller information');
    }

    const type =
      originalMethod.name === 'publish' ? 'publishers' : 'subscribers';

    try {
      originalMethod.apply(this, args);
      await useTopicsLoggerStore
        .getState()
        .logSuccess(this.topicName, type, args[0], caller, args[1]);
    } catch (error) {
      // logger.logError(originalMethod, fileName, error);
    }
  };
}

type TopicConfig = {
  topicName: string;
};

export class Topic<T extends TopicType> extends EventsManager<T> {
  public topicName: string;

  constructor(
    config: TopicConfig = {
      topicName: `Topic-${useTopicsLoggerStore.getState().topics.length}`,
    }
  ) {
    super();
    this.topicName = config.topicName;
    useTopicsLoggerStore.getState().topics.push({
      topicName: this.topicName,
      events: [],
    });
  }
}
