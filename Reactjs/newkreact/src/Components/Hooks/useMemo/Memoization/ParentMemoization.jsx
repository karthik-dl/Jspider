import React, { useState } from 'react'
import ChildOneMemoization from './ChildOneMemoization'
import ChildTwoMemoization from './ChildTwoMemoization';

const ParentMemoization = () => {

    let[count,setCount] = useState(0)
    let[count1,setCount1] = useState(0)

    let updateOne=()=>{
        setCount(count+1)
    }

    let updateTwo=()=>{
        setCount1(count1+1)
    }

    console.log("Parent rendered")
    
  return (
    <div>
        <h1 style={{backgroundColor:"red"}} onClick={updateOne}>Count {count}</h1>
        <h1 style={{backgroundColor:"green"}} onClick={updateTwo}>Count1 {count1}</h1>
        <ChildOneMemoization count={count} />
        <hr/>
        <ChildTwoMemoization/>
    </div>
  )
}

export default ParentMemoization