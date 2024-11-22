import { Topic } from '@enegix/events';

export const GreetingTopic = new Topic<{
  GREET_USER: string;
  GREET_WORLD: undefined;
  TEST: string;
}>();

GreetingTopic.subscribe('GREET_USER', (name) => {
  console.log(`Hello, ${name}!`);
});

GreetingTopic.subscribe('GREET_WORLD', () => {
  console.log('Hello, World!');
});
