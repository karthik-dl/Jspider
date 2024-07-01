import React, { useState } from 'react'

const ControllComponent = () => {

    let[loginForm,setLoginForm]= useState({userName:"",password:""})

    let ChangeLoginForm=({target:{value,name}})=>{
        setLoginForm({...loginForm,[name]:value})
    }

    let getFormData=(e)=>{
        e.preventDefault()
    }

    console.log("Controlled Rendered");
  return (
    <div>
        <h1>Controll Component</h1>
        <form  onSubmit={getFormData}>
            <input type="text" name="userName" onChange={ChangeLoginForm}/>
            <br/>
            <input type="password" onChange={ChangeLoginForm}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ControllComponent