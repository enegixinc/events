import { EventsManager } from './core';
import { TopicLogger } from './topicLogger';
import * as stackTraceParser from 'stacktrace-parser';

export interface TopicType {
  [event: string]: unknown;
}

function LogMethod<T extends TopicType>(
  target: Topic<T>,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
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

    const logger = this.logger as TopicLogger;
    try {
      originalMethod.apply(this, args);
      await logger.logSuccess(type, args[0], caller, args[1]);
    } catch (error) {
      // logger.logError(originalMethod, fileName, error);
    }
  };
}

type TopicConfig = {
  topicName: string;
};

export class Topic<T extends TopicType> {
  public logger: TopicLogger;
  private eventsManager: EventsManager<T>;

  constructor(config: TopicConfig) {
    this.eventsManager = new EventsManager<T>();
    this.logger = new TopicLogger(config);
  }

  @LogMethod
  publish<E extends keyof T>(event: E, data?: T[E]) {
    return this.eventsManager.publish(event as any, data);
  }

  @LogMethod
  subscribe<E extends keyof T>(event: E | E[], callback: (data: T[E]) => void) {
    return this.eventsManager.subscribe(event as any, callback);
  }

  unsubscribeAll() {
    this.eventsManager.unsubscribeAll();
  }
}
