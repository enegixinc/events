type MethodLog = {
  method: string;
  topic: string;
  event: string;
  count: number;
  successCount: number;
  errorCount: number;
};

export class TopicLogger {
  publishers: MethodLog[] = [];
  subscribers: MethodLog[] = [];
  events: Record<
    string,
    { publishers: MethodLog[]; subscribers: MethodLog[] }
  > = {};

  logPublish(method: string, event: string) {
    this._logEvent('publishers', method, event);
  }

  logSubscribe(method: string, event: string) {
    this._logEvent('subscribers', method, event);
  }

  logSuccess(method: string, event: string) {
    this._updateEventCounts(method, event, 'successCount');
  }

  logError(method: string, event: string, error: any) {
    console.error(`Error in method ${method} for event ${event}:`, error);
    this._updateEventCounts(method, event, 'errorCount');
  }

  getLogs() {
    return this.events;
  }

  private _logEvent(
    type: 'publishers' | 'subscribers',
    method: string,
    event: string
  ) {
    const topicLog = this._getOrCreateEventLog(event, type);
    const existingLog = topicLog.find(
      (log) => log.method === method && log.event === event
    );

    if (existingLog) {
      existingLog.count++;
    } else {
      topicLog.push({
        method,
        topic: '',
        event,
        count: 1,
        successCount: 0,
        errorCount: 0,
      });
    }
  }

  private _updateEventCounts(
    method: string,
    event: string,
    countType: 'successCount' | 'errorCount'
  ) {
    const allLogs = [...this.publishers, ...this.subscribers];
    const eventLog = allLogs.find(
      (log) => log.method === method && log.event === event
    );
    if (eventLog) {
      eventLog[countType]++;
    }
  }

  private _getOrCreateEventLog(
    event: string,
    type: 'publishers' | 'subscribers'
  ) {
    if (!this.events[event]) {
      this.events[event] = { publishers: [], subscribers: [] };
    }
    return this.events[event][type];
  }
}
