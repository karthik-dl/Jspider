import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import Services from './Services';

const Reactrouts = () => {
  return (
    <div>
    <Router>
    <Layout/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Services/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default Reactrouts

