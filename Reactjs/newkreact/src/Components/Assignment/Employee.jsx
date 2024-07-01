import React from 'react'
// import EmployeeDetail from "./EmployeeDetail"
import { EmployeeDetails } from './EmployeeDetails'
import EmployeeStyle from "./EmployeeStyle.module.css"


const Employee = () => {
  return (
    <div className={EmployeeStyle.container}>
      {/* <div>{EmployeeDetails.map((employee) => {
        return <EmployeeDetail
          // image={employee.image}
          // id={employee.id}
          // name={employee.name}
          // role={employee.role} 

          />
      })}
      </div> */}

      {EmployeeDetails.map(data => {
        return (
          <div className={EmployeeStyle.card}>
            <h1><img src={data.image} alt=""/></h1>
            <h1>Name:{data.name}</h1>
            <h1>Id:{data.id}</h1>
            <h1>Role:{data.role}</h1>
            <h1>Phno:{data.PhNo}</h1>

          </div>
        )
      })}
    </div>
  )
}

export default Employee