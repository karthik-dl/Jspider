import React from 'react'
import "./Global.css"
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App