import React, { useState } from 'react'

const FormAssignment = () => {
        let [state,setState] = useState({fn:"",ln:"",email:""})
        let [state1,setState1] = useState([{fn:"",ln:"",email:""}])

        let[isBool,setIsBool]=useState(false)
        function updateData({target : {value,name}})
        {
            setIsBool(false)
            setState({...state,[name]:value})
        }

        let updateValues=(e)=>
        {
            e.preventDefault()
            setIsBool(true)
            setState1([...state1,state])
        }


  return (
    <div>
        <form  action='' onSubmit={updateValues}>
            <input type="text" placeholder='Enter your firstName' name="fn" onChange={updateData}/>
            <br/>
            <input type="text" placeholder='Enter your lastName' name="ln" onChange={updateData}/>
            <br/>
            <input type="email" placeholder='Enter your Email' name="email" onChange={updateData}/>
            <br/>
            <input type="password" placeholder='Enter your Password'/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        {isBool && <h1>{state.fn} {state.ln} {state.email}</h1>}
        <br/>
        {isBool && state1.map((data)=>{
            return (
                <h1>{data.fn}
                {data.ln}
                {data.email}
                </h1>
            )
        })}
    </div>
  )
}

export default FormAssignment