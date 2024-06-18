# Events Package

## Overview

The Events package provides a simple and efficient way to manage events in your TypeScript applications. It leverages `eventemitter3` for event management and includes decorators for logging function calls. This package allows for publishing, subscribing, and unsubscribing from events, with additional support for handling events once and managing typed events.

## Features

- Encapsulate events in [topics](#using-topic-class-for-encapsulated-typed-events)
- Type-safe events with TypeScript

## Installation

To install the package, use npm or yarn:

```sh
pnpm install @enegix/events
# or
npm install @enegix/events
# or
yarn add @enegix/events
```

## Usage

### Basic Usage

By default, using publish and subscribe without [topics](#using-topic-class-for-encapsulated-typed-events) means the events are handled in the global topic.

```typescript
import { publish, subscribe, unsubscribeAll } from '@enegix/events';

// Subscribe to an event from anywhere in the application
subscribe('event1', (data) => {
  console.log('Received data:', data);
});

// Publish an event
publish('event1', { message: 'Hello World!' });
```

### Using `Topic` Class for Encapsulated Typed Events

Creating a `Topic` encapsulates events to that specific topic, ensuring that events do not interfere with other topics.

```typescript
import { Topic } from '@enegix/events';

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface UserTopic {
  CREATED: UserInfo;
  DELETED: Pick<UserInfo, 'id'>;
  UPDATE: 'SUCCESS' | 'FAILED';
}

const userTopic = new Topic<UserTopic>();

// Subscribe to an event in this topic
userTopic.subscribe('CREATED', (data) => {
  console.log('User created:', data.name); // data is of type UserInfo
});

// Publish an event in this topic
userTopic.publish('CREATED', { id: '1', name: 'John', email: 'john@example.com' }); // Typed

// Unsubscribe from all events in this topic
userTopic.unsubscribeAll();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
