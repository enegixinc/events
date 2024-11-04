import { Topic } from '@enegix/events';

export const GreetingTopic = new Topic<{
  GREET_USER: string;
  GREET_WORLD: undefined;
  TEST: string;
}>({
  topicName: 'GreetingTopic',
});

GreetingTopic.subscribe('GREET_USER', (name) => {
  console.log(`Hello, ${name}!`);
});

GreetingTopic.subscribe('GREET_WORLD', () => {
  console.log('Hello, World!');
});

// const greetMe = async () => {
//   setInterval(() => {
//     GreetingTopic.publish('GREET_USER', 'ME');
//   }, 1000);
// };
//
// greetMe();

