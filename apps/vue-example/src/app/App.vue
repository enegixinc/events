<script lang="ts" setup>
import { GreetingTopic } from './events';
import { computed, ref, toRaw, watch } from 'vue';
import { publish } from '@enegix/events';
import PubSubVisualizer from './visual.vue';
import { useTopicsLogger } from '../../../../libs/events/src/devtools/vue-topic-logger';

const user = ref<string>('John');
const logs = computed(() => useTopicsLogger().value.topics);

watch(logs, (newLogs) => {
  console.log('New 232logs:', toRaw(newLogs));
});
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

    <pub-sub-visualizer :data="logs" />
  </div>
</template>
