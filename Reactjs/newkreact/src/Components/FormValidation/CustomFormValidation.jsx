import React from 'react'
import { useState } from 'react'
import formValidateStyle from "./customFormValidation.module.css"

const CustomFormValidation = () => {

    let [formData,setFormData]= useState({fn:"",mob:"",email:"",pwd:""})
    let[error,setError]=useState([])

    //* Updating the form value
    let updateFormData=({target:{name,value}})=>{
        setFormData({...formData,[name]:value})
    }

    // *Submitting the formData
    let submitFormData=(e)=>{
        e.preventDefault();
        setError(validate(formData))
    }

    // *validating the formData
    let validate=(fdata)=>{

        let errorMessage={}
        if(!fdata.fn)
        {
            errorMessage.fnMessage="FullName is mandatory"
        }
        else if(fdata.fn.length<6)
        {
            errorMessage.fnMessage="Name should contain at least 6 characters "
        }

       if(!fdata.mob)
       {
        errorMessage.mobMessage="Mobile number is mandatory"
       }
       else if(!fdata.mob)
       {
        errorMessage.fnMessage="Mobile number"
       }

       if(!fdata.email)
       {
        errorMessage.emailMessage="Email is required"
       }
       else if(!fdata.email)
       {
        errorMessage.emailMessage="you have to entered email@gmail.com"
       }

       if(!fdata.pwd)
       {
        errorMessage.pwdMessage="Password is mandatory"
       }
       else if(!fdata.pwd >=6)
       {
        errorMessage.pwdMessage="Password should contain 6 characters"
       }

        return errorMessage;
    }
    console.log(error)

    // let handleClick=()=>{
    //     alert("Registered Successfully")
    // }

    return (
        <div>
            <form className={formValidateStyle.form} onSubmit={submitFormData}>
                {/* <h1>Register Here</h1> */}
                <div className={formValidateStyle.input_div}>
                <h1>Register Here</h1>
                    <input type="text" placeholder='Enter the fullName' name="fn" onChange={updateFormData} value={formData.fn} />
                    <small>{error.fnMessage && error.fnMessage}</small>
                </div>
                <div className={formValidateStyle.input_div}>
                    <input type="tel" placeholder='Enter your mobile number' name="mob" onChange={updateFormData} value={formData.mob} />
                    <small>{error.mobMessage && error.mobMessage}</small>
                </div>
                <div className={formValidateStyle.input_div}>
                    <input type="email" placeholder='Enter your email' name="email" onChange={updateFormData} value={formData.email} />
                    <small>{error.email && error.emailMessage}</small>
                </div>
                <div className={formValidateStyle.input_div}>
                    <input type="password" placeholder='Enter your password' name="pwd" onChange={updateFormData} value={formData.pwd} />
                    <small>{error.pwdMessage && error.pwdMessage}</small>
                </div>
                <div className={formValidateStyle.input_div}>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default CustomFormValidation