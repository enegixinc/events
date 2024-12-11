<script lang="ts" setup>
import { GreetingTopic } from './events';
import { ref } from 'vue';
import { publish, useTopicLogger } from '@enegix/events';
import PubSubVisualizer from './visual.vue';

const user = ref<string>('John');

const { log } = useTopicLogger(GreetingTopic);
</script>

<template>
  <div>
    <h1>Events Vue Example</h1>
    <div>
      <input v-model="user" />
      <button @click="GreetingTopic.publish('GREET_USER', user)">
        Greet User
      </button>
      <button @click="publish('GREET_ALL', user)">Greet All</button>
    </div>

    <pub-sub-visualizer :data="log" />
  </div>
</template>
