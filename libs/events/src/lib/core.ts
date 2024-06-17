import { EventEmitter } from 'eventemitter3';
import { VueInfo } from '../utils/info';



export type MetaData = {
  functionName: string;
  fileUrl: string;
  relativePath: string;
  lineNumber: number;
  columnNumber: number;
  event: string;
};




export class EventsManager<T> {
  emitter: EventEmitter;
  publishers: Map<string, MetaData> = new Map();
  subscribers: Map<string, Function> = new Map();
  events: Set<string> = new Set();

  get metadata() {
    return {
      eventsCount: this.events.size,
      subscribersCount: this.subscribers.size,
      publishersCount: this.publishers.size,
    }
  }


  constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }



  publish(event: string, data?: T) {
    this.publishers.set(event, {
      ...new VueInfo().metaData,
      event,
    });
    this.emitter.emit(event, data);
    console.log(`Published '${event}' event with data: ${JSON.stringify(data)}`);
  }

  subscribe = <ExpectedData>(
    event: string | string[],
    callback: (data: ExpectedData) => void
  ) => {
    const isMultipleEvents = Array.isArray(event);
    const _callback = this.constructCallback(callback);

    if (isMultipleEvents)
      event.forEach((event) => this._subscribe(event, _callback));
    else this._subscribe(event, _callback);

    return { unsubscribe: () => this.unsubscribe(event) };
  };

  private _subscribe<ExpectedData>(
    event: string,
    callback: (data: ExpectedData) => void,
    once: boolean = false
  ) {
    // const vue = new VueInfo();
    // console.log('subscriber: ', vue.componentName);
    // console.log('subscriber metadata: ', vue.metaData);

    this.subscribers.set(event, callback);
    if (once) this.emitter.once(event, callback);
    else this.emitter.on(event, callback);
    console.log(`Subscribed to event '${event}'`);
  }

  private constructCallback<ExpectedData>(
    callback: (data: ExpectedData) => void
  ) {
    return (receivedData: ExpectedData) => {
      callback(receivedData);
      console.log(`Received data: ${JSON.stringify(receivedData)}`);
    };
  }

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

  subscribeOnce(event: string, callback: (data: T) => void) {
    const _callback = this.constructCallback(callback);
    this._subscribe(event, _callback, true);
    return { unsubscribe: () => this.unsubscribe(event) };
  }

  unsubscribeAll() {
    this.emitter.removeAllListeners();
  }
}

export const globalTopic = new EventsManager();

export const publish = globalTopic.publish.bind(globalTopic);
export const subscribe = globalTopic.subscribe.bind(globalTopic);
export const unsubscribe = globalTopic.unsubscribe.bind(globalTopic);
export const subscribeOnce = globalTopic.subscribeOnce.bind(globalTopic);
export const unsubscribeAll = globalTopic.unsubscribeAll.bind(globalTopic);
