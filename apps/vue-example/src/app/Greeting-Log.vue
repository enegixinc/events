<script lang="ts" setup>
import { GreetingTopic } from './events';
import { ref } from 'vue';

const log = ref<string[]>([]);

GreetingTopic.subscribe('GREET_USER', (user: string) => {
  log.value = [...log.value, `Hello, ${user}!`];
});

GreetingTopic.subscribe('GREET_WORLD', () => {
  log.value = [...log.value, 'Hello, World!'];
});
</script>

<template>
  <div>
    <h2>Log</h2>
    <ul>
      <li v-for="entry in log" :key="entry">{{ entry }}</li>
    </ul>
  </div>
</template>
