import React, { useRef } from 'react'

const UserefExample = () => {

    let inputRef=useRef(null)
    let btnRef=useRef()
    console.log("inputRef");

    let FocusInput =()=>{
        inputRef.current.focus()
        // console.log(inputRef.current.focus)
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={FocusInput} ref={btnRef}>Focus</button>
    </div>
  )
}

export default UserefExample