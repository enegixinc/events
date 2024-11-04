<script lang="ts" setup>
import { GreetingTopic } from './events';
import { ref } from 'vue';
import GreetingLog from './Greeting-Log.vue';

const user = ref<string>('John');
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

    <button @click="GreetingTopic.publish('GREET_WORLD', {})">
      Greet World
    </button>

    <GreetingLog />
  </div>
</template>
