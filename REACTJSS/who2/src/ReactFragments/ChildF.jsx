import React from 'react'

const ChildF = () => {
    let skills = ["JavaScript","Reactjs","HTML","CSS"]
  return (
    <div>
        {skills.map((element,key)=>{
            return (<>
            <React.Fragment key={key}>
                <h1>key:{key}</h1>
                <h1>element:{element}</h1>
            </React.Fragment>
            </>)
        })}
    </div>
  )
}

export default ChildF