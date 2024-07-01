import React, { useState } from 'react'

const FLName = () => {

    let [fullName,setName]= useState({firstName:"Kathik",lastName:"D L"})


    // !    state is in Objects
    let updateFirstName = ()=>{
        setName({...fullName,firstName:"Karan"})
    }

    let updateLastName = ()=>{
        setName({...fullName,lastName:"Rao"})
    }
    

    let resetName = ()=>{
        fullName.firstName="";
        fullName.lastName=" "
        setName({...fullName})
    }
  return (
    <div>
        <h1>{JSON.stringify(fullName)}</h1>
        <button onClick={updateFirstName}>FirstName</button>
        <button onClick={updateLastName}>LastName</button>
        <button onClick={resetName}>Reset</button>
    </div>
  )
}

export default FLName