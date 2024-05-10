import { EventEmitter } from 'eventemitter3';

export const emitter = new EventEmitter();

type Subscribe = (
  event: string,
  callback: (data: unknown) => void,
) => {
  data: unknown;
  unsubscribe: () => void;
};

export const subscribe: Subscribe = (event, callback) => {
  let data;

  const _callback = (_data: unknown) => {
    data = _data;
    callback(data);
  };

  console.log(`Subscribed to event '${event}'`);

  emitter.on(event, _callback);

  // console.table({
  //   event: emitter.eventNames(),
  //   listeners: emitter.listenerCount(event),
  // });

  const unsubscribe = () => {
    emitter.off(event, _callback);
    console.log(`Unsubscribed from event '${event}'`);
  };

  return { data, unsubscribe };
};

export const subscribeOnce = (
  event: string,
  callback: (data: unknown) => void,
) => {
  emitter.once(event, callback);
  return { unsubscribe: () => emitter.off(event, callback) };
};

type Publish = (event: string, data?: unknown) => void;

export const publish: Publish = (event, data) => {
  emitter.emit(event, data);
  console.log(`Published '${event}' event with data: ${JSON.stringify(data)}`);
};
