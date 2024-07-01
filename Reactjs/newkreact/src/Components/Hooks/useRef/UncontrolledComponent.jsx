import React, { useRef ,useState} from 'react'

const UncontrolledComponent = () => {

    let userNameRef=useRef()
    let passwordRef=useRef()

    let getFormData=(e)=>{
        e.preventDefault();
        let un=userNameRef.current.value
        let pw=passwordRef.current.value
        console.log({un,pw});
    }
  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={getFormData} >
        <input type="text" name="userName" ref={userNameRef}/>
        <br/>
        <input type="password" ref={passwordRef}/>
        <button>Login</button>
        </form>
        
    </div>
  )
}

export default UncontrolledComponent