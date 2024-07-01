/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import navStyle from "./NavBar.module.css"
import { GiWorld} from "react-icons/gi";
import {IoIosCloseCircle} from  "react-icons/io"
import { TbGridDots } from "react-icons/tb";
// import "../../Global.css"


const NavBar = () => {
  // const [active, setActive] = useState('navBar');

  // //function to toggle navBar
  // const showNav=()=>{
  //   setActive("navBar activeNavBar")
  // }

  //  //function to remove toggle navBar
  //  const removeNav=()=>{
  //   setActive("navBar")
  // }
  return (
    <section className={navStyle.navBar_section}>
      <header className={navStyle.header}>
        <div className={navStyle.logoDiv}>
          <a href='#' className={navStyle.logo}>
            <h1><GiWorld className={navStyle.icon}/>Traveling....</h1>
          </a>
        </div>

        <div className={navStyle.navBar}>
          <ul className={navStyle.navLists}>
              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>Home</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>Packages</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>shop</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>About</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>Pages</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>News</a>
              </li>

              <li className={navStyle.navItem}>
                <a href="#" className={navStyle.navLink}>Contact</a>
              </li>

              <button className={navStyle.btn}>
                <a href="#">BookNow</a>
              </button>
          </ul>

          <div className={navStyle.closeBar}>
          <IoIosCloseCircle className={navStyle.icon}/>
          </div>
        </div>

        <div className={navStyle.toggle}>
        <TbGridDots className={navStyle.icon}/>
        </div>
      </header>
    </section>
  )
}

export default NavBar