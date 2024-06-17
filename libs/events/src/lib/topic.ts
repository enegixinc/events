import { EventsManager } from '@enegix/events';

export interface TopicType {
  [event: string]: unknown;
}

class Topic<T extends TopicType> {
  private eventsManager: EventsManager<T>;

  constructor() {
    this.eventsManager = new EventsManager<T>();
  }

  publish<E extends keyof T>(event: E, data: T[E]) {
    this.eventsManager.publish(event.toString(), data);
  }

  subscribe<E extends keyof T>(event: E | E[], callback: (data: T[E]) => void) {
    return this.eventsManager.subscribe(event.toString(), callback);
  }

  unsubscribeAll() {
    this.eventsManager.unsubscribeAll();
  }
}

type UserTopic = {
  CREATED: { name: string; email: string };
  DELETED: { userId: string };
  UPDATE: { name: string };
};

const userTopic = new Topic<UserTopic>();

userTopic.publish('CREATED', { name: 'John Doe', email: '' }); // Typed

userTopic.subscribe('DELETED', ({ userId }) => {
  console.log(userId); // Typed
});

userTopic.subscribe(['CREATED', 'DELETED'], (data) => {
  // We don't know the data type, it can be from CREATED or DELETED event
  console.log(data); // NOT Typed

  // Check if data is from CREATED event
  if ('name' && 'email' in data) {
    console.log(data.name); // Typed
  }
});
