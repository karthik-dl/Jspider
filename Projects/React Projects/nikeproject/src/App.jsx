import React from 'react';
import Main from './Main';
import "./Global.css"
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div>
        <Main/>
        <Navigation/>
        <Hero/>
    </div>
  )
}

export default App