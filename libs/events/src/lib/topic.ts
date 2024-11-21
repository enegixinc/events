import { EventsManager } from './core';

export interface TopicType {
  [event: string]: unknown;
}

export class Topic<T extends TopicType> {
  registeredEvents: (keyof T)[];
  private eventsManager: EventsManager<T>;

  constructor() {
    this.eventsManager = new EventsManager<T>();
    this.registeredEvents = Object.keys({} as T as TopicType) as (keyof T)[];
  }

  getEvents(): (keyof T)[] {
    return this.registeredEvents;
  }

  @logMethod
  publish<E extends keyof T>(event: E, data?: T[E]) {
    this.eventsManager.publish(event as any, data);
  }

  @logMethod
  subscribe<E extends keyof T>(event: E | E[], callback: (data: T[E]) => void) {
    return this.eventsManager.subscribe(event as any, callback);
  }

  @logMethod
  unsubscribeAll() {
    this.eventsManager.unsubscribeAll();
  }
}

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const file = getFileName(new Error()?.stack);
    console.log(`logMethod Method ${key}   -  ` + file);

    // console.log(`Method ${key} called with args:`, args);
    const result = originalMethod.apply(this, args);
    // console.log(`Method ${key} result:`, result);
    return result;
  };
  return descriptor;
}

const getFileName = (stack?: string) => {
  if (!stack) return;

  // console.log(stack);
  const lines = stack.split('\n');
  return lines[2];
};

// export class TopicLogger {
//   private publishers: { [topic: string]: string } = {};
//   private subscribers: { [topic: string]: string } = {};
//   private topic: Topic<TopicType>;
//
//   constructor(private readonly _topic: Topic<TopicType>) {
//     this.topic = _topic;
//   }
//
//   addPublisher(event: string, publisher: string) {
//     this.publishers[event] = publisher;
//   }
//
//   addSubscriber(event: string, subscriber: string) {
//     this.subscribers[event] = subscriber;
//   }
//
//   getPublishers() {
//     return this.publishers;
//   }
//
//   getSubscribers() {
//     return this.subscribers;
//   }
// }
//
// export class TopicsManager {
//   private topics: { [topic: string]: Topic<TopicType> } = {};
//
//   createTopic<T extends TopicType>(topic: string): Topic<T> {
//     if (this.topics[topic]) {
//       throw new Error(`Topic '${topic}' already exists`);
//     }
//
//     const newTopic = new Topic<T>();
//     this.topics[topic] = newTopic;
//
//     return newTopic;
//   }
//
//   getTopic<T extends TopicType>(topic: string): Topic<T> {
//     if (!this.topics[topic]) {
//       throw new Error(`Topic '${topic}' does not exist`);
//     }
//
//     return this.topics[topic] as Topic<T>;
//   }
//
//   deleteTopic(topic: string) {
//     if (!this.topics[topic]) {
//       throw new Error(`Topic '${topic}' does not exist`);
//     }
//
//     delete this.topics[topic];
//   }
// }
