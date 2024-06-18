import { EventsManager } from '@enegix/events';

export interface TopicType {
  [event: string]: unknown;
}

export class Topic<T extends TopicType> {
  private eventsManager: EventsManager<T>;

  constructor() {
    this.eventsManager = new EventsManager<T>();
  }

  publish<E extends keyof T>(event: E, data: T[E]) {
    // TODO: allow to publish multiple events at the same time
    this.eventsManager.publish(event as any, data);
  }

  subscribe<E extends keyof T>(event: E | E[], callback: (data: T[E]) => void) {
    return this.eventsManager.subscribe(event as any, callback);
  }

  unsubscribeAll() {
    this.eventsManager.unsubscribeAll();
  }
}
