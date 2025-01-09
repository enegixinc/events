import { EventEmitter } from 'eventemitter3';
import * as stackTraceParser from 'stacktrace-parser';
import { useTopicsLoggerStore } from './state';

export class EventsManager<T> {
  emitter: EventEmitter;

  protected constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }

  publish(event: string, data?: unknown) {
    this.logMethod('publish', event, data);
    console.log(
      `Published '${event}' event with data: ${JSON.stringify(data)}`
    );
    this.emitter.emit(event, data);
  }

  subscribe<ExpectedData>(
    event: string | string[],
    callback: (data: ExpectedData) => void
  ) {
    this.logMethod('subscribe', event, callback);
    const isMultipleEvents = Array.isArray(event);
    const _callback = this.constructCallback(callback);

    if (isMultipleEvents) {
      event.forEach((event) => this._subscribe(event, _callback));
    } else {
      this._subscribe(event, _callback);
    }

    return { unsubscribe: () => this.unsubscribe(event) };
  }

  unsubscribe(event: string | string[]) {
    this.logMethod('unsubscribe', event);
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
    this.logMethod('subscribeOnce', event, callback);
    const _callback = this.constructCallback(callback);
    this._subscribe(event, _callback, true);
    return { unsubscribe: () => this.unsubscribe(event) };
  }

  unsubscribeAll() {
    this.logMethod('unsubscribeAll');
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

  private async logMethod(
    methodName: string,
    event?: string | string[],
    data?: unknown
  ) {
    // Skip source map handling in tests
    // if (import.meta.env.MODE === 'test') return;

    const stack = new Error().stack as string;
    const parsedStack = stackTraceParser.parse(stack);
    const caller = parsedStack[2];
    if (!caller.file || !caller.lineNumber || !caller.column) {
      throw new Error('Cannot get caller information');
    }

    const type = methodName === 'publish' ? 'publishers' : 'subscribers';

    await useTopicsLoggerStore
      .getState()
      // @ts-expect-error - no data type
      .logSuccess(this.topicName, type, event, caller, data);
  }
}
