import React, { useMemo, useState } from 'react'

const MemoUse = () => {
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(0)

    let updateCount=()=>{
        setCount(count+1)
    }

    let updateCount1=()=>{
        setCount1(count1+2)
    }

    let isEven=useMemo(()=>{
        console.log("IsEven Called");
        for(let i=0; i<1000000000 ;i++)
        {

        }
        return count%2===0
    },[count])
  return (
    <div>
        <h1 style={{backgroundColor:"red"}} onClick={updateCount}>Count {count} {isEven ? "Even" : "Odd"}</h1>
        <h1 style={{backgroundColor:"green"}} onClick={updateCount1}>Count1 {count1}</h1>
    </div>
  )
}

export default MemoUse