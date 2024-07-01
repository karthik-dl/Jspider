import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from "./NavBar.module.css"

const NavBar = ({navLinks,navPaths}) => {
  return (
    <nav className={navStyle.nav}>
        <Link to={navPaths.url1}>{navLinks.key1}</Link>
        <Link to={navPaths.url2}>{navLinks.key2}</Link>
        <Link to={navPaths.url3}>{navLinks.key3}</Link>
        {/* <Link to ={navPaths.url4}>{navLink.key4}</Link> */}
    </nav>
  )
}

export default NavBar