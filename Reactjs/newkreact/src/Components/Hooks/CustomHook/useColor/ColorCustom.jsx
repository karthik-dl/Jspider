import React, { useState } from 'react'
import { useColor } from './useColor'


const ColorCustom = () => {

   let {color,changeColor,ChangePre} =useColor(color)

    return (
        <div>
            <h1>Changing the color here</h1>
            <button  onClick={changeColor} >Change</button> 
            &nbsp;
            <button onClick={ChangePre}>Change Prev</button>
        </div>
    )
}

export default ColorCustom