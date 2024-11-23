import { StackFrame } from 'stacktrace-parser';
import { getOriginalPosition, OriginalPosition } from './stack';

type Method = {
  type: MethodType;
  eventKey: string;
  data: any;
  originalPosition: OriginalPosition;
};

type MethodLog = Method & {
  calledCount: number;
  successCount: number;
  errorCount: number;
};

export type MethodType = 'publisher' | 'subscriber';

type TopicLoggerConfig = {
  topicName: string;
};

type Event = {
  eventKey: string;
  publishers: MethodLog[];
  subscribers: MethodLog[];
};

export class TopicLogger {
  private events: {
    eventKey: string;
    publishers: MethodLog[];
    subscribers: MethodLog[];
  }[] = [];

  constructor(private config: TopicLoggerConfig) {}

  get logs() {
    return {
      topic: this.config.topicName,
      events: this.events,
    };
  }

  async logSuccess(
    type: 'publishers' | 'subscribers',
    eventKey: string,
    callerStack: NonNullable<StackFrame>,
    data?: any
  ) {
    const originalPosition = await getOriginalPosition(callerStack.file, {
      line: callerStack.lineNumber as number,
      column: callerStack.column as number,
    });

    console.log('originalPosition', originalPosition);
    const method = this.getMethod(type, eventKey, originalPosition);
    method.calledCount++;
    method.successCount++;
  }

  private getEvent(eventKey: string): Event {
    const event = this.events.find((event) => event.eventKey === eventKey);
    if (event) return event;
    this.events.push({ eventKey, publishers: [], subscribers: [] });
    return this.getEvent(eventKey);
  }

  private getMethod(
    type: 'publishers' | 'subscribers',
    eventKey: string,
    originalPosition: OriginalPosition
  ): MethodLog {
    const event = this.getEvent(eventKey);
    const method = event[type].find(
      (method) => method.originalPosition.line === originalPosition.line
    );

    if (method) return method;
    event[type].push({
      type: type === 'publishers' ? 'publisher' : 'subscriber',
      eventKey,
      data: null,
      originalPosition,
      calledCount: 0,
      successCount: 0,
      errorCount: 0,
    });
    return this.getMethod(type, eventKey, originalPosition);
  }
}
