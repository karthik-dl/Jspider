import React from 'react'
import CounterHoc from './CounterHoc'

const CounterOne = ({count,incrementCounter,decrementCounter}) => {
  return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
    </>
  )
}

export default CounterHoc({CounterOne,})