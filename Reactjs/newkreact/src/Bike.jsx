import React from 'react'
import himalayan  from "./Components/images/himalayan.jpeg"
import BikeStyle from "./Components/css/Bike.module.css"

const Bike = () => {
  return (
    <div className={BikeStyle.bike}>
        <h1>India's Most wanted bikes</h1>
        <img src={himalayan} alt=''/>
    </div>
  )
}

export default Bike