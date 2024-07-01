import React from 'react'
import { useForm } from 'react-hook-form'
import formStyle from "./customFormValidation.module.css"

const LibraryFormValidation = () => {
    let { register, handleSubmit, formState: { errors } } = useForm();

    let submitFormData = (data) => {
        console.log(data)
    }

    console.log(errors)
    return (
        <div>
            <form className={formStyle.form} onSubmit={handleSubmit(submitFormData)}>
                <div className={formStyle.input_div}>
                <h1>Register Here</h1>
                    <input type="text" placeholder='FullName' {...register("fn",{required:{value:true,message:"FullName should contain minimum 6 characters"}})}/>
                    <small>{errors.fn?.message}</small>
                </div>
                <div className={formStyle.input_div}>
                    <input type="tel" placeholder='Mobile' {...register("mob",{required:{value:true,message:"Mobile should contain 10 characters"},
                pattern:{value:/^[6-9][0-9]{9}$/,message:"Mobile should contain only numbers"}})}/>
                    <small>{errors.mob?.message}</small>
                </div>
                <div className={formStyle.input_div}>
                    <input type="email" placeholder='email' {...register("email")}/>
                </div>
                <div className={formStyle.input_div}>
                    <input type="password" placeholder='Password' {...register("pwd")}/>
                </div>

                <div className={formStyle.input_div}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default LibraryFormValidation