import React from 'react'
// import Head from './Head'
import "./index.css"
import Header from "./Components/Header/Header"
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Testmonials from './Components/Testmonials/Testmonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Header/>
   <NavBar/>
   <About/>
   <Experience/>
   <Services/>
   <Testmonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App