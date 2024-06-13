import { EventEmitter } from 'eventemitter3';

function logMetadata(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const stackTrace = getStackTrace();
    const callerInfo = stackTrace[1] || {
      functionName: 'No caller info',
      fileName: 'Unknown',
      lineNumber: 0,
      columnNumber: 0,
    }; // Index 1 usually points to the caller

    console.log(`Function: ${propertyKey.toString()}`);
    console.log(`Called by: ${callerInfo.functionName}`);
    console.log(
      `Caller location: ${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.columnNumber}`
    );
    console.log(`Function location: ${propertyKey.toString()}`);

    return originalMethod.apply(this, args);
  };

  return descriptor;
}

function getStackTrace(): StackFrame[] {
  const error = new Error();
  const stack = error.stack || '';
  const stackFrames = stack
    .split('\n')
    .map((line) => line.trim())
    .slice(1); // Skip the first line (Error message)

  return stackFrames
    .map((frame) => parseStackFrame(frame))
    .filter((frame): frame is StackFrame => frame !== null);
}

function parseStackFrame(frame: string): StackFrame | null {
  const framePattern = /at\s+(.*?)\s+\((.*?):(\d+):(\d+)\)/;
  const match = frame.match(framePattern);

  if (match) {
    const [, functionName, fileName, lineNumber, columnNumber] = match;
    return {
      functionName,
      fileName,
      lineNumber: parseInt(lineNumber, 10),
      columnNumber: parseInt(columnNumber, 10),
    };
  }
  return null;
}

interface StackFrame {
  functionName: string;
  fileName: string;
  lineNumber: number;
  columnNumber: number;
}

function logFunction(fn: Function): Function {
  return function (...args: any[]) {
    const stackTrace = getStackTrace();
    const callerInfo = stackTrace[1] || {
      functionName: 'No caller info',
      fileName: 'Unknown',
      lineNumber: 0,
      columnNumber: 0,
    }; // Index 1 usually points to the caller

    console.log(`Function: ${fn.name || 'anonymous function'}`);
    console.log(`Called by: ${callerInfo.functionName}`);
    console.log(
      `Caller location: ${callerInfo.fileName}:${callerInfo.lineNumber}:${callerInfo.columnNumber}`
    );
    console.log(`Function location: ${fn.name || 'anonymous function'}`);

    // @ts-ignore
    return fn.apply(this, args);
  };
}

class EventsManager<T> {
  emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
    console.log('EventsManager initialized');
  }

  publish(event: string, data?: T) {
    console.trace('publish called');
    this.emitter.emit(event, data);
    console.log(
      `Published '${event}' event with data: ${JSON.stringify(data)}`
    );
  }

  subscribe = <ExpectedData>(
    event: string | string[],
    callback: (data: ExpectedData) => void
  ) => {
    console.trace('subscribe called');
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

const globalTopic = new EventsManager();

export const publish = globalTopic.publish.bind(globalTopic);
export const subscribe = globalTopic.subscribe.bind(globalTopic);
export const unsubscribe = globalTopic.unsubscribe.bind(globalTopic);
export const subscribeOnce = globalTopic.subscribeOnce.bind(globalTopic);
export const unsubscribeAll = globalTopic.unsubscribeAll.bind(globalTopic);
