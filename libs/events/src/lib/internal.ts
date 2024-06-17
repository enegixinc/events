import { EventEmitter } from 'eventemitter3';
import { EventsManager } from '@enegix/events';

const internalTopic = new EventsManager();

export enum INTERNAL_EVENTS {
  NEW_SUBSCRIBER = 'internal-new-subscriber',
  NEW_PUBLISHER = 'internal-new-publisher',
}
