import React from 'react'
import Child from './Child'

const Parent = () => {

  let getChildData = (cdata)=>{
    console.log(cdata);
  }

  let name = "john"
  return (
    <div><Child sname={name} pfunc={getChildData}/></div>
  )
}

export default Parent