import React, { useState } from 'react'


const Colors = () => {
    
    const [farray,addArray] = useState([])
    const [color,setColor] =useState(["red","green","yellow","White","black"])

    const addColor=()=>{
       let  setUpdatedArray =[...farray, color[farray.length]]
        addArray(setUpdatedArray)
    }
    return (
        <div>
            <button onClick={addColor}>Add</button>
            {farray.map((color,index) => (
                <h1 key={index}>{color}</h1>
            ))}
        </div>
    )
}

export default Colors