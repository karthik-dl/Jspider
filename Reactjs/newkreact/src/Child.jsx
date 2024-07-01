import React from 'react'


function Child ({sname,pfunc}){

    let childStyle = {
        width:"200px",
        height:"200px",
        border:"2px solid red"

    }

    let childData = "hello world"
    pfunc(childData)
  return (
    <div style={childStyle}>
        <h1>{sname}</h1>
      </div>
  )
}

export default Child