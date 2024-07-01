import React, { useCount } from 'react'

const app = () => {
    let[count,setCount]=useCount(0)

    let Increment= ()=>{
        setCount(count+1)
    }
    let Decrement =()=>{
        setCount(count-1)
    }
    let Reset= ()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>

  )
}

export default app
