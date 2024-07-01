import React, { useState } from 'react'

const HideandShowToggle = () => {

    let [isbool,setIsbool] = useState(true)

    let toggleImage=()=>{
      setIsbool(!isbool);
    }
  return (
    <div>
      {isbool && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0YB_jgHsL7kzjy-UC671cOfQq4RcZAZJqA&usqp=CAU" alt="" height={"200px"}/>}<br/>
      <button onClick={toggleImage}>{isbool ? "Show" : "Hide"}</button>
    </div>
  )
}

export default HideandShowToggle