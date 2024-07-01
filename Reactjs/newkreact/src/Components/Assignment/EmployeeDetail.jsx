import React from 'react'

const EmployeeDetail = ({details}) => {
  return (
    <div>
       {details.map(data=>{
        return(
          <>
          <h1>{data.name}</h1>
          </>
        )
       })}
    </div>
  )
}

export default EmployeeDetail