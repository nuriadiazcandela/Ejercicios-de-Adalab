import React from 'react';
import '../stylesheet/App.scss';

const getRandomInteger = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  render() {
    const randomMurray = getRandomInteger(MAX_SIZE, MIN_SIZE);

    return <img src={`http://www.fillmurray.com/200/${randomMurray}`} alt="Random murray" />;
  }
}

export default RandomMurray;
