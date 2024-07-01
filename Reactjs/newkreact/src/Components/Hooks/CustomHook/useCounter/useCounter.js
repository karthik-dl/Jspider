import { useState } from 'react'


const useCounter = (c) => {
    let[count,setCount]= useState(0)

    let increment=()=>{
        setCount(count + c)
    }

    let decrement=()=>{
        setCount(count - c)
    }
  return  {count,increment,decrement}
}

export {useCounter}