import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const MyComponent = () => {
    let { Text, setText } = useContext(MyContext)
    let { state, setState } = useContext(MyContext)

    let onChange = () => {
        setText("Happy Independence Day")
        // setState(document.body.style.background="Blue")
     }

    let onChange2=()=>{
        setText("Before Independence Day")
        // setState(document.body.style.background="Green")
    }

    return (
        <div>
            <h1>{Text}</h1>
            {/* <h1>{state}</h1> */}
            <button onClick={onChange}>Next</button>
            <button onClick={onChange2}>Previous</button>
        </div>
    )
}

export default MyComponent