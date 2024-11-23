import './styles.css';

import { createApp } from 'vue';
import App from './app/App.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';

const VCodeBlock = createVCodeBlock({
  copyButton: false,
  highlightjs: true,
  theme: 'atom-one-dark',
  lang: 'typescript',
});
const app = createApp(App);

app.component('VCodeBlock', VCodeBlock);

app.use(VCodeBlock);
app.mount('#root');
