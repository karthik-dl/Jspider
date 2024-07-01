import React, { useRef } from 'react'

const UserrefExample2 = () => {

    let btnRef=useRef()
    
    let printData=()=>{
        btnRef.current.style.display= "none"
        window.print();
        btnRef.current.style.display="inline"
    }
  return (
    <div>
        <h1>Hello Bengalore</h1>
        <h1>Hello Bengalore</h1>
        <h1>Hello Bengalore</h1>
        <h1>Hello Bengalore</h1>
        <h1>Hello Bengalore</h1>
        <h1>Hello Bengalore</h1>
        <button onClick={printData} ref={btnRef}>Print</button>
    </div>
  )
}

export default UserrefExample2