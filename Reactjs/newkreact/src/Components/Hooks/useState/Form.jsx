import React, { useState } from 'react'
import formStyle from "./Form.module.css"
// import swal from "sweetalert2"

const Form = () => {
    let [Fn, setFn] = useState("")
    let [Ln, setLn] = useState("")
    let [mobile, setMobile] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    // let [message,setMessage] = useState("")

    let updateFn = (e) => {
        setFn(e.target.value)
    }

    let updateLn = ({ target }) => {
        setLn(target.value)
    }

    let updateMobile = ({ target: { value } }) => {
        setMobile(value)
    }

    let updateEmail = ({ target: { value } }) => {
        setEmail(value)
    }

    let updatePwd = ({ target: { value } }) => {
        setPwd(value)
    }
    // let click=()=>{
    //     alert("Login Successfully")
    // }
     let handleRegistration = () => {
        console.log('Registration data:', Fn, Ln, mobile, email, pwd);
    // alert("Login Successfully")
    // swal.fire({
    //     position  : 'center',
    //     icon      : 'success',
    //     title     : 'Registered successfully!',
    //     showConfirmButton :false,
    //     timer :10000
    // })
    // setTimeout(()=>{
    //     setMessage("");

    // },10000)
     };

     let sendData =(event)=>{
        event.preventDefault();     //! comment this to get page refresh
        // let fdata={Fn,Ln,mobile}
        // console.log("hello");
     }
    return (
        <div className={formStyle.container}>
            <div className={formStyle.card}>
                <form action=""  className={formStyle.data} onSubmit={sendData}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder='FirstNamer' onChange={updateFn} /><br />
                    <input type="text" placeholder='LastName' onChange={updateLn} /><br />
                    <input type="tel" placeholder='Mobile' onChange={updateMobile} /><br />
                    <input type="email" placeholder='Email' onChange={updateEmail} /><br />
                    <input type="password" placeholder='Password' onChange={updatePwd} /><br />
                    <button onClick={handleRegistration}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Form