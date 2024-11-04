import { GreetingTopic } from './events';

export const greetAll = () => {
  GreetingTopic.publish('GREET_USER', 'John');
  GreetingTopic.publish('GREET_USER', 'Jane');
  GreetingTopic.publish('GREET_WORLD');
};
