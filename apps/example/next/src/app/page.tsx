'use client';

import {globalTopic, publish, subscribe} from '@enegix/events';

export default function Index() {
  const handleClick = () => {
    const handleClickChild = () => {
      publish('event', { data: 'data' });
      subscribe('event', (data) => {
        console.log(data);
      });
    };
    handleClickChild();
  };

  subscribe('event', (data) => {
    console.log('from page', data);
  })

  return (
    <>
      <button onClick={handleClick}>publish</button>
      <button
        onClick={() => {
          publish('event', { data: 'data' });
        }}
      >
        anonymous publish
      </button>
    </>
  );
}
