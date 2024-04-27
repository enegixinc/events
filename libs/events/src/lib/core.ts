import { EventEmitter } from 'eventemitter3';

const emitter = new EventEmitter();

type Subscribe = (
  events: string | string[],
  callback: (data: unknown) => void
) => {
  data: unknown;
  unsubscribe: () => void;
};

export const subscribe: Subscribe = (events, callback) => {
  let eventList: string[];

  if (typeof events === 'string') {
    eventList = [events];
  } else {
    eventList = events;
  }

  let data;

  const _callback = (_data: unknown) => {
    data = _data;
    callback(data);
    console.log(`Received data: ${JSON.stringify(data)}`);
  };

  const unSubscriptions = eventList.map((event) => {
    console.log(`Subscribed to event '${event}'`);
    emitter.on(event, _callback);
    return () => {
      emitter.off(event, _callback);
      console.log(`Unsubscribed from event '${event}'`);
    };
  });

  const unsubscribe = () => {
    unSubscriptions.forEach((unsub) => {
      unsub();
      console.log(`Unsubscribed from event '${unsub.name}'`);
    });
  };

  return { data, unsubscribe };
};

export const subscribeOnce = (
  event: string,
  callback: (data: unknown) => void
) => {
  emitter.once(event, callback);
  return { unsubscribe: () => emitter.off(event, callback) };
};

type Publish = (event: string, data?: unknown) => void;

export const publish: Publish = (event, data) => {
  emitter.emit(event, data);
  console.log(`Published '${event}' event with data: ${JSON.stringify(data)}`);
};

export const unsubscribeAll = () => {
  emitter.removeAllListeners();
};
