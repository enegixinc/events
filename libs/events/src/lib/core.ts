// eslint-disable-next-line @nx/enforce-module-boundaries
import { EventEmitter } from 'eventemitter3';

class EventsVisualizationService {
  private events: Array<{
    method: string;
    event: string;
    type: string;
    file: string | undefined;
    line: number | undefined;
    component: string;
  }> = [];

  logEvent(eventData: {
    method: string;
    event: string;
    type: string;
    file: string | undefined;
    line: number | undefined;
    component: string;
  }) {
    this.events.push(eventData);
  }

  getEvents() {
    return this.events;
  }
}

// export const eventsVisualizationService = new EventsVisualizationService();

// function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//
//   descriptor.value = function (...args: any[]) {
//     const stack = new Error().stack?.split('\n')[2].trim();
//     const match = stack.match(/\(([^)]+):(\d+):\d+\)/);
//     const file = match?.[1];
//     const line = match?.[2];
//
//     // Get Vue component name if available
//     const vueInstance = this as any;
//     const componentName = vueInstance?.$options?.name || 'Unknown Component';
//
//     // Log or store metadata
//     const metadata = {
//       method: key,
//       event: args[0], // Assuming the first argument is the event name
//       type: key === 'publish' ? 'Publisher' : 'Subscriber',
//       file,
//       line: Number(line),
//       component: componentName,
//     };
//
//     // Log to console or a visualization service
//     console.log(metadata);
//     eventsVisualizationService.logSuccess(metadata);
//
//     // Execute the original method
//     return originalMethod.apply(this, args);
//   };
//
//   return descriptor;
// }

export abstract class EventsManager<T> {
  emitter: EventEmitter;

  protected constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }

  // @logMethod
  publish(event: string, data?: unknown) {
    console.log(
      `Published '${event}' event with data: ${JSON.stringify(data)}`
    );
    this.emitter.emit(event, data);
  }

  subscribe = <ExpectedData>(
    event: string | string[],
    callback: (data: ExpectedData) => void
  ) => {
    const isMultipleEvents = Array.isArray(event);
    const _callback = this.constructCallback(callback);

    if (isMultipleEvents) {
      event.forEach((event) => this._subscribe(event, _callback));
    } else this._subscribe(event, _callback);

    return { unsubscribe: () => this.unsubscribe(event) };
  };

  unsubscribe(event: string | string[]) {
    if (Array.isArray(event)) {
      event.forEach((event) => {
        this.emitter.off(event);
        console.log(`Unsubscribed from event '${event}'`);
      });
    } else {
      this.emitter.off(event);
      console.log(`Unsubscribed from event '${event}'`);
    }
  }

  subscribeOnce(event: string, callback: (data?: T) => void) {
    const _callback = this.constructCallback(callback);
    this._subscribe(event, _callback, true);
    return { unsubscribe: () => this.unsubscribe(event) };
  }

  unsubscribeAll() {
    this.emitter.removeAllListeners();
  }

  private _subscribe<ExpectedData>(
    event: string,
    callback: (data: ExpectedData) => void,
    once = false
  ) {
    console.log(`Subscribed to event '${event}'`);

    if (once) this.emitter.once(event, callback);
    else this.emitter.on(event, callback);
  }

  private constructCallback<ExpectedData>(
    callback: (data: ExpectedData) => void
  ) {
    return (receivedData: ExpectedData) => {
      console.log(
        `Received data: ${JSON.stringify(receivedData)}, and calling callback ${
          callback.name
        }`
      );
      callback(receivedData);
    };
  }
}
