// eslint-disable-next-line @nx/enforce-module-boundaries
import { EventEmitter } from 'eventemitter3';

function Loggable() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Calling '${propertyKey}' with arguments: ${args}`);
      const result = originalMethod.apply(this, args);
      console.log(`'${propertyKey}' returned: ${result}`);
      return result;
    };

    return descriptor;
  };
}

export class EventsManager<T> {
  emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }

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

  subscribeOnce<ExpectedData>(
    event: string,
    callback: (data: ExpectedData) => void
  ) {
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

const globalTopic = new EventsManager();

export const publish = globalTopic.publish.bind(globalTopic);
export const subscribe = globalTopic.subscribe.bind(globalTopic);
export const unsubscribe = globalTopic.unsubscribe.bind(globalTopic);
export const subscribeOnce = globalTopic.subscribeOnce.bind(globalTopic);
export const unsubscribeAll = globalTopic.unsubscribeAll.bind(globalTopic);
