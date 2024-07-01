import React, { useReducer } from 'react'


let initialState = 
{
    count1:0,
    count2:0
}
let countReducer=(cstate,action)=>{
    console.log(cstate)
    switch(action)
    {
        case 'increment1' : return {...cstate,count1:cstate.count1+1};
        case 'decrement1' : return {...cstate,count1:cstate.count1-1};

        case 'increment2' : return {...cstate,count2:cstate.count2+2};
        case 'decrement2' : return {...cstate,count2:cstate.count2-2};
        
        case "reset": return  initialState
    }
    return cstate
}
const USeReducerHookExtwo = () => {
  let [count ,disPatcher] = useReducer(countReducer,initialState)
  return (
    <div>
        <h1>count1:{count.count1}</h1>
        <button onClick={()=>{disPatcher("increment1")}}>Increment</button>
        <button onClick={()=>{disPatcher("decrement1")}}>Decrement</button>

        <h1>count2:{count.count2}</h1>
        <button onClick={()=>{disPatcher("increment2")}}>Increment</button>
        <button onClick={()=>{disPatcher("decrement2")}}>Decrement</button>

        <button onClick={()=>{disPatcher("reset")}}>Reset</button>
        
    </div>
  )
}

export default USeReducerHookExtwo