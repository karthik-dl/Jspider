import React from 'react'
import { MdMessage } from 'react-icons/md'
import style from "./Button.module.css"
import {FaPhoneAlt} from "react-icons/fa"

export const Button = ({isSecondary,icon,text,...rest}) => {

    // const {isSecondary,icon,text} = props

  return (
    <button
    {...rest} 
    
    className={isSecondary ? style.secondary_btn :style.primary_btn}>
        {icon}
        {text}
    </button>
  )

}
