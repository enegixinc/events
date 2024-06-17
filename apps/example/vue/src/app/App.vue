<script setup lang="ts">
import NxWelcome from './NxWelcome.vue';
import { publish, subscribe } from '@enegix/events';

publish('publish', { title: 'vue' });
subscribe('subscribe', (data) => {
  console.log(data);
});
</script>

<template>
  <NxWelcome title="vue" />
</template>
