import { h } from 'vue';

export * from './lib/core';
export * from './lib/topic';
export * from './lib/topicLogger';
export * from './lib/logger-vue';

const gfgTitle = h('h1', {
  style: {
    color: 'green',
    width: 'fit-content',
    margin: 'auto',
  },
  innerHTML: 'Welcome to GeeksforGeeks',
});
const topic = h('p', {
  style: { width: 'fit-content', margin: 'auto' },
  innerHTML: 'Vue.js Render Functions Component VNodes creation',
});

const app = h({
  data() {
    return {
      tutorials: ['Data Structures', 'Algorithms', 'Web Development'],
    };
  },
  render() {
    return [
      gfgTitle,
      topic,
      Array.from(this.tutorials).map((elem, index) => {
        return h('p', elem);
      }),
    ];
  },
});

// addCustomTab({
//   name: 'Events',
//   title: 'Events',
//   icon: 'https://www.svgrepo.com/show/375484/pubsub.svg',
//   view: {
//     type: 'vnode',
//     vnode: app,
//   },
//   category: 'advanced',
// });
