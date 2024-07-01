import React from 'react';
import CounterHoc from './CounterHoc';

const CounterTwo = ({count,incrementCounter,decrementCounter}) => {
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default CounterHoc({CounterTwo})