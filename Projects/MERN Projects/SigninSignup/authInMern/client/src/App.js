import React from 'react'
import Signup from './Components/Signup/Signup'
import Main from './Components/Main/Main'
import Login from './Components/Login/Login';
import {Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  const user = localStorage.getItem("token")
  return (
    <div>
      <Routes>
        {user && <Route path="/" extract element={<Main/>} />}
        <Route path="/signup" extract element={<Signup/>} />
        <Route path="/login" extract element={<Login/>}/>
        <Route path="/" element={<Navigate replace to="/login" />}/>
      </Routes>
    </div>
  )
}

export default App