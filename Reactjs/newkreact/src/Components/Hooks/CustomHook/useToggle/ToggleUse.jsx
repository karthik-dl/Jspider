// import useToggle from "./useToggle"

// export default function ToggleUse() {
//   const [value, toggleValue] = useToggle(false)

//   return (
//     <div>
//       <div>{value.toString()}</div>
//       <button onClick={toggleValue}>Toggle</button>
//       <button onClick={() => toggleValue(true)}>Make True</button>
//       <button onClick={() => toggleValue(false)}>Make False</button>
//     </div>
//   )
// }

import React from 'react'
import { useToggle } from './useToggle'

const ToggleUse = () => {
    let [value,toggleValue] = useToggle(false)

    // let toggleValue=()=>{
    //     setValue("Hii bangalore")
    // }

    // let toggleValue1=()=>{
    //     setValue("Bai Bangalore")
    // }
  return (
    <div>
        <h1>{value.toString()}</h1>
        {/* <button onClick={setValue}>Toggle</button> */}
        <button onClick={toggleValue}>Make True</button>
        <button onClick={toggleValue}>Make False</button>
    </div>
  )
}

export default ToggleUse