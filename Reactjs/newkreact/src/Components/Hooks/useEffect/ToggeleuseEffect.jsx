import React, { useState } from 'react'
// import UseEffectShow from './UseEffectShow';
import Count from './Count';

const ToggeleuseEffect = () => {

    let [toggle,setToggle] = useState(true)

    let changeToggle =()=>{
        setToggle(!toggle);
    }
  return (
    <div>
        {toggle && <Count/>}
        <button onClick={changeToggle}>{toggle ? "remove" : "Add"}</button>
    </div>
  )
}

export default ToggeleuseEffect