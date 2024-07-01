import React from 'react'
// import ambasider from "../public/images/ambasider.jpeg"
// import  ambasider from "./ambasider"
import  ambasider  from './Components/images/ambasider.jpeg';
import carStyle from "./Components/css/Car.module.css"
import Vehicle from './Components/data/VehicleDetails';


const Car = () => {
  return (
    <div className={carStyle.car}>
        <h1>India's most wanted cars</h1>
        <img src={ambasider} alt=''/>
        {Vehicle.map((Vehicle)=>{
            return (
              <>
              <h1>{Vehicle.id}</h1>
              <h1>{Vehicle.name}</h1>
              <h1><img src={Vehicle.image} alt=""/></h1>
              </>
            )
        })}
    </div>
  )
}

export default Car