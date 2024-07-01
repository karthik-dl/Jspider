import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Style from "./Signup.module.css"
import axios from "axios"

const Signup = () => {

    let [data, setData] = useState({ firstName: "", lastName: "", email: "", password: "" })

    const navigate = useNavigate()

    const [error, setError] = useState("")

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:1000/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login")
            console.log(res.message);

        }
        catch (error) {
            if (error.response && error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <div className={Style.signup_container}>
            <div className={Style.signup_form_container}>
                <div className={Style.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={Style.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={Style.right}>
                    <form className={Style.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input type="text"
                            placeholder="FirstName"
                            onChange={handleChange}
                            name='firstName'
                            value={data.firstName}
                            required
                            className={Style.input}
                        />

                        <input type="text"
                            placeholder="LastName"
                            onChange={handleChange}
                            name='lastName'
                            value={data.lastName}
                            required
                            className={Style.input}
                        />

                        <input type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name='email'
                            value={data.email}
                            required
                            className={Style.input}
                        />
                        <input type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            name='password'
                            value={data.password}
                            required
                            className={Style.input}
                        />

                        {error && <div className={Style.error_msg}>{error}</div>}
                        <button type="submit" className={Style.green_btn}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup