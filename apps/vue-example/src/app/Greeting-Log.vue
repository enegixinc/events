<script lang="ts" setup>
import { GreetingTopic } from './events';
import { ref } from 'vue';
import { greetAll } from './actions';

const log = ref<string[]>([]);

GreetingTopic.subscribe('GREET_USER', (user: string) => {
  log.value = [...log.value, `Hello, ${user}!`];
});

GreetingTopic.subscribe('GREET_WORLD', () => {
  log.value = [...log.value, 'Hello, World!'];
});

GreetingTopic.subscribe('TEST', () => {
  console.log('log', GreetingTopic.logger.getLogs());
});
console.log('log', GreetingTopic.logger.getLogs());
</script>

<template>
  <div>
    <button @click="GreetingTopic.publish('GREET_WORLD')">Greet World</button>

    <button @click="greetAll">Greet All</button>

    <h2>Log</h2>
    <ul>
      <li v-for="entry in log" :key="entry">{{ entry }}</li>
    </ul>
  </div>
</template>
