import { Topic } from './topic';
import { describe, expect, test, vitest } from 'vitest';

describe('Topic', () => {
  test('Create Topic', () => {
    const topic = new Topic();
    expect(topic).toBeDefined();
    expect(topic).toBeInstanceOf(Topic);
    expect(topic).toHaveProperty('publish');
    expect(topic).toHaveProperty('subscribe');
    expect(topic).toHaveProperty('unsubscribeAll');
  });

  test('Publish and Subscribe', () => {
    const topic = new Topic();
    const callback = vitest.fn();
    topic.subscribe('event', callback);
    topic.publish('event', 'testData');
    expect(callback).toHaveBeenCalledWith('testData');
  });

  test('Publish and subscribe to another topic', () => {
    const topic = new Topic();
    const callback = vitest.fn();
    const anotherTopic = new Topic();
    const anotherCallback = vitest.fn();
    topic.subscribe('event', callback);
    anotherTopic.subscribe('event', anotherCallback);
    anotherTopic.publish('event', 'testData');
    expect(callback).not.toHaveBeenCalled();
    expect(anotherCallback).toHaveBeenCalledWith('testData');
  });

  test('Typescript', () => {
    type UserInfo = { id: string; name: string; email: string };

    type UserTopic = {
      CREATED: UserInfo;
      DELETED: Pick<UserInfo, 'id'>;
      UPDATE: 'SUCCESS' | 'FAILED';
      3: 'number';
    };
    const userTopic = new Topic<UserTopic>();

    const callback = vitest.fn();
    userTopic.subscribe('CREATED', callback);
    userTopic.publish('CREATED', { id: '1', name: 'John', email: 'email' });
    expect(callback).toHaveBeenCalledWith({
      id: '1',
      name: 'John',
      email: 'email',
    });

    const callback2 = vitest.fn();
    userTopic.subscribe('DELETED', callback2);
    userTopic.publish('DELETED', { id: '1' });
    expect(callback2).toHaveBeenCalledWith({ id: '1' });

    const callback3 = vitest.fn();
    userTopic.subscribe(['CREATED', 'DELETED'], callback3);
    userTopic.publish('CREATED', { id: '1', name: 'John', email: 'email' });
    userTopic.publish('DELETED', { id: '1' });

    expect(callback3).toHaveBeenCalledTimes(2);
    expect(callback3).toHaveBeenNthCalledWith(1, {
      id: '1',
      name: 'John',
      email: 'email',
    });
    expect(callback3).toHaveBeenNthCalledWith(2, { id: '1' });
  });
});
