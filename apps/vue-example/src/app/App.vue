<script lang="ts" setup>
import { GreetingTopic } from './events';
import { ref, toRaw, watch } from 'vue';
import { useTopicLogger } from '@enegix/events';
import PubSubVisualizer from './visual.vue';

const user = ref<string>('John');

const { log } = useTopicLogger(GreetingTopic);
watch(log, (newVal) => console.log(toRaw(newVal)));
</script>

<template>
  <div>
    <h1>Events Vue Example</h1>
    <div>
      <input v-model="user" />
      <button @click="GreetingTopic.publish('GREET_USER', user)">
        Greet User
      </button>
    </div>
    <pub-sub-visualizer :data="log" />
  </div>
</template>
