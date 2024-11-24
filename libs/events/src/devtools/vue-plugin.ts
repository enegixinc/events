import type { App } from 'vue';
import { onDevToolsClientConnected } from '@vue/devtools-api';
import { setupDevtools } from './devtools';

export const VueEventsDevtools = {
  install(app: App, options = {}) {
    console.log(`install called`, { app, options });
    setupDevtools(app);

    onDevToolsClientConnected(() => {
      console.log('devtools client connected');
    });
  },
};
