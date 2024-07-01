import React from 'react'
import car from "./Components/images/ambasider.jpeg"
import bike from "./Components/images/mt15.jpeg"

const Conditionalrendering = () => {
    let day = "Sunday"
    let reactJs = "true"
    let web = "MERN"
    let vehicle = "car"
    let week = "7days"


    // if(day === "Monday")
    // {
    //     return (<h1>Working day</h1>)
    // }
    // else if( day === "Sunday")
    // {
    //     return ("Holiday")
    // }
  return (
    <div>
        {day==='Monday' ? <h1>working day</h1>: <h1>Holiday</h1>}
        <h1>{web === "MERN" ? "web Developer": "Trainee"}</h1>
        <h1>{reactJs? "yes":"No"}</h1>
        <h1>{vehicle === "bike"? <img src={car} alt=""/> : <img src={bike} alt=""/>}</h1>
        <h1>{week === "7days" || <h1>Week</h1>}</h1>
        <h1>This is conditional rendering</h1>
    </div>
  )
}

export default Conditionalrendering