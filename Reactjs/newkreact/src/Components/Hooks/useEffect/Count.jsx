import React, { useState } from 'react'
import { useEffect } from 'react'

const Count = () => {
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(0)

    // useEffect(()=>{
    //     console.log("useEffect");
    // },[count])

    useEffect (()=>{

        document.body.style.backgroundColor = "green"
        // !This will be executed after rendering(mounted) and every re-rendering(state update)
        console.log("useEffect");

        // !clean function will be executed when the component is removed from the
        return ()=>{
            document.body.style.backgroundColor = "red"
            console.log("useEffect executed");
        }
    },[count])

    let updateCount =()=>{
        setCount(count+1)
    }
    console.log("rendered");

    let updateCount1 =()=>{
        setCount1(count1+3)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <h1>Count1:{count1}</h1>
        <button onClick={updateCount}>Update</button>
        <br/>
        <button onClick={updateCount1}>Update</button>
    </div>
  )
}

export default Count