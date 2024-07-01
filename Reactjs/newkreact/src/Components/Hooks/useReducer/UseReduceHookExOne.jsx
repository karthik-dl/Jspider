import React from 'react'
import { useReducer } from 'react';

let countReducer=(cstate,action)=>{
    switch(action)
    {
        case 'increment' : return cstate+1;
        case 'decrement' : return cstate-1;
        case "reset": return 0
    }
}
const UseReduceHookExOne = () => {

    let [count ,disPatcher] = useReducer(countReducer,0)
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>{disPatcher("increment")}}>Increment</button>
        <button onClick={()=>{disPatcher("decrement")}}>Decrement</button>
        <button onClick={()=>{disPatcher("reset")}}>Reset</button>
        
    </div>
  )
}

export default UseReduceHookExOne