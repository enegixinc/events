import { EventsManager } from './core';
import { TopicLogger } from './topicLogger';

export interface TopicType {
  [event: string]: unknown;
}

export class Topic<T extends TopicType> {
  public logger: TopicLogger;
  private eventsManager: EventsManager<T>;

  constructor() {
    this.eventsManager = new EventsManager<T>();
    this.logger = new TopicLogger();
  }

  @logMethod(
    'publish',
    'Topic Logger',
    (instance: Topic<any>) => instance.logger
  )
  publish<E extends keyof T>(event: E, data?: T[E]) {
    this.eventsManager.publish(event as any, data);
  }

  @logMethod(
    'subscribe',
    'Topic Logger',
    (instance: Topic<any>) => instance.logger
  )
  subscribe<E extends keyof T>(event: E | E[], callback: (data: T[E]) => void) {
    return this.eventsManager.subscribe(event as any, callback);
  }

  @logMethod(
    'unsubscribeAll',
    'Topic Logger',
    (instance: Topic<any>) => instance.logger
  )
  unsubscribeAll() {
    this.eventsManager.unsubscribeAll();
  }
}

function logMethod(
  methodType: string,
  description: string,
  getLogger: (instance: any) => TopicLogger
) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const logger = getLogger(this); // Get the logger dynamically
      const file = getFileName(new Error()?.stack);
      const event = args[0]?.toString() || 'unknown event';

      // Log the method call
      console.log(
        `[${description}] Method ${key} called for event: ${event}, file: ${file}`
      );
      if (methodType === 'publish') {
        logger.logPublish(key, event);
      } else if (methodType === 'subscribe') {
        logger.logSubscribe(key, event);
      } else if (methodType === 'unsubscribeAll') {
        logger.logPublish(key, 'all events');
      }

      try {
        const result = originalMethod.apply(this, args);
        logger.logSuccess(key, event);
        return result;
      } catch (error) {
        logger.logError(key, event, error);
        throw error;
      }
    };

    return descriptor;
  };
}

const getFileName = (stack?: string) => {
  if (!stack) return 'unknown';
  const lines = stack.split('\n');
  const match = lines[2]?.match(/\(([^)]+):\d+:\d+\)/);
  return match?.[1] || 'unknown';
};
