// import { useState } from "react"

// export default function useToggle(defaultValue) {
//   const [value, setValue] = useState(defaultValue)

//   function toggleValue(value) {
//     setValue(currentValue =>
//       typeof value === "boolean" ? value : !currentValue
//     )
//   }

//   return [value, toggleValue]
// }

import React, { useState } from 'react'

const useToggle = () => {

    let [value,setValue]= useState("")

    function toggleValue(){
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue)
    }
  return [value,setValue]
}

export {useToggle}