// eslint-disable-next-line @nx/enforce-module-boundaries
import { expect, MockInstance, test, vitest } from 'vitest';
import { publish, subscribe, unsubscribeAll } from '../index';

describe('subscribe function', () => {
  let callbackSpy: MockInstance;

  beforeEach(() => {
    callbackSpy = vitest.spyOn(console, 'log');
  });

  afterEach(() => {
    callbackSpy.mockRestore();
    unsubscribeAll();
  });

  test('subscribing to a single event', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe('event1', callback);

    publish('event1', 'testData');

    expect(callbackSpy).toHaveBeenCalledWith('testData');
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event1\' event with data: "testData"'
    );
  });

  test('subscribing to multiple events', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe(['event1', 'event2'], callback);

    publish('event1', 'testData1');
    publish('event2', 'testData2');

    expect(callbackSpy).toHaveBeenCalledWith('testData1');
    expect(callbackSpy).toHaveBeenCalledWith('testData2');
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event1\' event with data: "testData1"'
    );
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event2\' event with data: "testData2"'
    );
  });

  test('unsubscribe from event', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe('event1', callback);

    publish('event1', 'testData');
    unsubscribe();
    publish('event1', 'ignoreData');

    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event1\' event with data: "testData"'
    );
    expect(callbackSpy).toHaveBeenCalledWith('testData');
    expect(callbackSpy).not.toHaveBeenCalledWith('ignoreData');
  });

  test('unsubscribe from multiple events', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe(['event1', 'event2'], callback);

    publish('event1', 'testData1');
    publish('event2', 'testData2');
    unsubscribe();
    publish('event1', 'testData1');
    publish('event2', 'testData2');

    expect(callbackSpy).toHaveBeenCalledWith('testData1');
    expect(callbackSpy).toHaveBeenCalledWith('testData2');
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event1\' event with data: "testData1"'
    );
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'event2\' event with data: "testData2"'
    );
  });

  test('ExpectedData type', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe<string>('string', callback);

    publish('string', 'testData');

    expect(callbackSpy).toHaveBeenCalledWith('testData');
    expect(callbackSpy).toHaveBeenCalledWith(
      'Published \'string\' event with data: "testData"'
    );

    publish('number', 123);

    subscribe<number>('number', (data) => {
      expect(data).toBe(123);
    });
  });

  test('publish event with no data', () => {
    const callback = console.log;
    const { unsubscribe } = subscribe('event1', callback);

    publish('event1');

    expect(callbackSpy).toHaveBeenCalledWith(
      "Published 'event1' event with data: undefined"
    );
  });
});
