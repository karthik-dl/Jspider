import React, { useState } from 'react'
import style from "./Login.module.css"
import { Link } from 'react-router-dom';
// import Signup from './../Signup/Signup';
import axios from "axios"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:1000/api/auth"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token", res.data)
            window.location = "/";
        }
        catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    return (
        <div className={style.login_container}>
            <div className={style.login_form_container}>
                <div className={style.left}>
                    <form className={style.form_container} onSubmit={handleSubmit}>
                        <h1>Login to your Account</h1>
                        <input type="email" placeholder='Email'
                            name="email" onChange={handleChange} value={data.email}
                            required className={style.input} />

                        <input type="password" placeholder='Password'
                            name="password" onChange={handleChange} value={data.password}
                            required className={style.input} />

                        <button type="Submit" className={style.green_btn}>SignIn</button>
                    </form>
                </div>
                <div className={style.right}>
                    <h1>New Here</h1>
                    <Link to="/signup">
                        <button type="button" className={style.white_btn}>
                            SignUp
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login