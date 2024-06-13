import { publish, subscribe } from './lib/core';

const navbar = () => {
  subscribe('hi', () => {
    console.log('hi');
  });
};

const mainFunction = () => {
  publish('hi');
};

navbar();
mainFunction();
