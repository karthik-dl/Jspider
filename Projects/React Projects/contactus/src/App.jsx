import React from 'react'
import Navigation from './Components/Navbar/Navigation'
import "../src/Global.css"
import ContactHeader from './Components/ContactHeader/ContactHeader';
import ContactForm from './Components/ContactForm/ContactForm';
// import { Button } from './Components/Button/Button';

const App = () => {
  return (
    <div className='container'>
        <Navigation/>
        <main className='main_container'>
          <ContactHeader/>
        <ContactForm/></main>
        
        {/* <Button/> */}
    </div>
  )
}

export default App