<script setup lang="ts">
import { publish, subscribe } from '@enegix/events';

defineProps<{
  title: string;
}>();

subscribe('subscribe', (data) => {
  console.log(data);
});

publish('publish', { title: 'asd' });
</script>

<template>
  <div class="wrapper">
    <button @click="">publish</button>
  </div>
</template>
