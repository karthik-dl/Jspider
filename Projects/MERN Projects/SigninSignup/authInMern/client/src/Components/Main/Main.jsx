import React from 'react'
import style from "./Main.module.css"

const Main = () => {

    const handleLogout =()=>{
        localStorage.removeItem("token")
        window.location.reload();
    }
  return (
    <div className={style.main_container}>
        <nav className={style.navbar}>
            <h1>Welcome</h1>
            <button className={style.white_btn} onClick={handleLogout}>Logout</button>
        </nav>
        <h1>Tell me why are you login</h1>
    </div>
  )
}

export default Main