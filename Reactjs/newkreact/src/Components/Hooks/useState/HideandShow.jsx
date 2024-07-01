import React, { useState } from 'react'

const HideandShow =() => {

    const [isbool, setIsbool] = useState()

    let hideImage=()=>{
        setIsbool(true)
    }

    let ShowImage=()=>{
        setIsbool(false)
    }

  return (
    <div>
        {isbool || <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNl92qNwzhP_M2qyyq78DG2GPMokRD1WfmA&usqp=CAU" alt="" height={"200px"}/>}
        <button onClick={hideImage}>Hide</button>
        <button onClick={ShowImage}>Show</button>
    </div>
  )
}

export default HideandShow