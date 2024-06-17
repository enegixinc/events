<script setup lang="ts">
import { publish, subscribe } from '@enegix/events';

defineProps<{
  title: string;
}>();

subscribe('subscribe', (data) => {
  console.log(data);
});

publish('publish', { title: 'asd' });

const handleClick = () => {
  subscribe('subscribe', (data) => {
    console.log(data);
  });
  publish('publish', { title: 'vue' });

  const error = new Error();
  console.log(error.stack);
};
</script>

<template>
  <div class="wrapper">
    <button @click="handleClick">publish</button>
  </div>
</template>
