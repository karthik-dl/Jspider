import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount] = useState(0)

    let updateCount=()=>{
        setCount(count+1)
         console.log("number")
    }

    let updateCountFive = ()=>{
        setCount(count+5)
    }

    let Decrement = ()=>{
        setCount(count-10)
        // console.log("decrement");
    }
    let Reset =()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={updateCount}>Click</button>
        <button onClick={updateCountFive}>Click to 5+</button>
        <button onClick={Decrement}>Click to -10</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter