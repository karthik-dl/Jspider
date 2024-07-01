import React from 'react'
import ButtonStyle from "./Button.module.css"

const Button = (props,icon) => {
  return (
    <div className={ButtonStyle.btn}>
        <button>SignIn</button>
    </div>
  )
}

export default Button