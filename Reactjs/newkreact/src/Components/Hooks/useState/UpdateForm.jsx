import React, { useState } from 'react'

const UpdateForm = () => {
    // let [Fn, setFn] = useState("")
    // let [Ln, setLn] = useState("")
    // let [mobile, setMobile] = useState("")

    let [fdata, setFdata] = useState({ Fn: "", Ln: "", mobile: "" })

    let updateFdata = ({ target: { name, value } }) => {
        // const {name,value} = e.target
        setFdata({ ...fdata, [name]: value })
    }

    let sendData = (e) => {
        e.preventDefault();
        // console.data(fdata)
        alert("Login successfully")
    }

    return (
        <div>
            <h1>Full Name--------- {`${fdata.Fn} ${fdata.Ln} ${fdata.mobile}`}</h1>
            <form action="" onSubmit={sendData}>
                <h1>Create Account</h1>
                <input type="text" placeholder='FirstNamer' onChange={updateFdata} name="Fn" /><br />
                <input type="text" placeholder='LastName' onChange={updateFdata} name="Ln"/><br />
                <input type="tel" placeholder='Mobile' onChange={updateFdata} name="mobile" /><br />
                {/* <input type="email" placeholder='Email' onChange={updateEmail} /><br />
                    <input type="password" placeholder='Password' onChange={updatePwd} /><br /> */}
                <button>Register</button>
            </form>
        </div>
    )
}

export default UpdateForm