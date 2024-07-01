import React from 'react'
import Contactlogo from "../../Imgages/contactlogo.png"
import style from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={style.container}>
        <div className={style.logo}>
            <img src={Contactlogo} alt="contact"/>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation