import React from 'react'
import { useState } from 'react'

const FormValidation = () => {
    let [data,setData]=useState({fn:"",mob:"",date:"",gender:"",email:"",pwd:""})
    let [error,setError]= useState()

    let updateData=({target:{name,value}})=>{
        setData({...data,[name]:value})
    }

    let submitData=(e)=>{
        e.preventDefault()
        setError(validate())
    }

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
       
       if(!fdata.gender)
       {
        errorMessage.genderMessage="gender is mandatory"
       }
       else if(!fdata.gender)
       {
        errorMessage.genderMessage="Gender contain male and female only"
       }

       if(!fdata.date)
       {
        errorMessage.dateMessage="date is mandatory"
       }
       else if(!fdata.date)
       {
        errorMessage.dateMessage="You should enter the date"
       }
        return errorMessage;
    }
    console.log(data);
    return (
        <div>
            <form onSubmit={submitData}>
                <div>
                    <input type="text" placeholder='FullName' name='fn' value={data.fn} onChange={updateData} />
                    <small>{error.fnMessage && error.fnMessage}</small>
                </div>
                <div>
                    <input type="tel" placeholder='Mobile Number' name='mob' value={data.mob} onChange={updateData} />
                    <small>{error.mobMessage && error.mobMessage}</small>
                </div>
                <div>
                    <input type="date" placeholder='Date of Birth' name='date' value={data.date} onChange={updateData} />
                    <small>{error.dateMessage && error.dateMessage}</small>
                </div>
                <div>
                    <input type="gender" placeholder='Enter the gender' name='gender' value={data.gender} onChange={updateData} />
                    <small>{error.genderMessage && error.genderMessage}</small>
                </div>
                <div>
                    <input type="email" placeholder='Enter your  Email' name='email' value={data.email} onChange={updateData} />
                    <small>{error.email && error.emailMessage}</small>
                </div>
                <div>
                    <input type="password" placeholder='Enter your  Password' name='pwd' value={data.pwd} onChange={updateData} />
                    <small>{error.pwdMessage && error.pwdMessage}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormValidation