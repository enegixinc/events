// eslint-disable-next-line @nx/enforce-module-boundaries
import { EventEmitter } from 'eventemitter3';
import { LogMethod } from './topic';

export abstract class EventsManager<T> {
  emitter: EventEmitter;

  protected constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }

  @LogMethod
  publish(event: string, data?: unknown) {
    console.log(
      `Published '${event}' event with data: ${JSON.stringify(data)}`
    );
    this.emitter.emit(event, data);
  }

  @LogMethod
  subscribe<ExpectedData>(
    event: string | string[],
    callback: (data: ExpectedData) => void
  ) {
    const isMultipleEvents = Array.isArray(event);
    const _callback = this.constructCallback(callback);

    if (isMultipleEvents) {
      event.forEach((event) => this._subscribe(event, _callback));
    } else this._subscribe(event, _callback);

    return { unsubscribe: () => this.unsubscribe(event) };
  }

  @LogMethod
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

  @LogMethod
  subscribeOnce(event: string, callback: (data?: T) => void) {
    const _callback = this.constructCallback(callback);
    this._subscribe(event, _callback, true);
    return { unsubscribe: () => this.unsubscribe(event) };
  }

  @LogMethod
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
