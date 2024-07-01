import React from 'react'

const Button = (body) => {
    body.addEventListener("onClick",setColor)
    
    const setColor =()=>{
        document.body.style.background = "blue"
    }
    const handleClick = () => {
        console.log('hello')
    }
    // handleClick()

  return (
    <div className='Home'
    >
        <h2>Homepage</h2>
        <button onClick={setColor}>Click me</button>
    </div>
  )
}

export default Button
