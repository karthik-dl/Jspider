// &useCallback  used rendering the particular component
// !1
// import React, { useState } from 'react'
// import Value from './Value'

// const UseCallback = () => {
//     let [count,setCount]=useState(0)
//     let [value,setValue]=useState([])

//     let Increment=()=>{
//         console.log("adding values");
//         setCount(prevalue=>prevalue+1)
//     }

//     let Addvalue =()=>{
//         setValue((f)=>[...f,"New Value"])
//     }
//   return (
//     <div>
//         <Value value={value} Addvalue={Addvalue}/>
//         <hr/>
//         <h1>{count}</h1>
//         <button onClick={Increment}>+</button>
//     </div>
//   )
// }

// export default UseCallback

// !........................................................



import React, { useCallback, useState } from 'react'
import Value from "./Value"

const UseCallback = () => {
    let [count,setCount]=useState(0)
    let [value,setValue]=useState([])

    let Increment=()=>{
        // console.log("adding values");
        setCount(prevalue=>prevalue+1)
    }

    let Addvalue =useCallback(()=>{
        setValue((f)=>[...f,"New Value"])
    },[value])
  return (
    <div>
        <Value value={value} Addvalue={Addvalue}/>
        <hr/>
        <h1>{count}</h1>
        <button onClick={Increment}>+</button>
    </div>
  )
}

export default UseCallback

