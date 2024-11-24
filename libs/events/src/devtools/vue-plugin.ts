import type { App } from 'vue';
import { onDevToolsClientConnected } from '@vue/devtools-api';
import { setupDevtools } from './devtools';
import { Topic } from '../lib/topic';

export const VueEventsDevtools = {
  install(app: App, topics: Topic<any>[]) {
    console.log(`install called`, { app, topics });
    setupDevtools(app, topics);

    onDevToolsClientConnected(() => {
      console.log('devtools client connected');
    });
  },
};
