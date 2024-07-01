// ! React class base component
// import React, { Component } from 'react'

// import { useState } from "react";

// export default class Cfc extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             subject="Reactjs",
//             trainer="Vivek"
//         }
//     }
//     changeName = ()=>{
//         this.setState ({subject:"DSA",trainer:"Raghu"})
//     }
//     changeName1 = ()=>{
//         this.setState ({subject:"Reactjs",trainer:"Vivek"})
//     }
//     render() {
//         return {
//             <div>
//             <h1>{this.state.trainer}</h1>
//             <h1>{this.state.subject}</h1>
//             <button onClick={this.changeName}>Next</button>
//             <button onClick={this.changeName1}>Previous</button>
//             </div>
//         }
//     }
// }

// ...................................................

// &Functional base component
// import React,{ useState } from 'react';
// const Cfc =()=>{
//     let [state,setState]=useState({Subject:"ReactJs",Trainer:"Vivek"})

//     let nextName=()=>{
//         setState({Subject:"DSA",Trainer:"Raghu"})
//     }

//     let changeName1=()=>{
//         setState({Subject:"ReactJs",Trainer:"Vivek"})
//     }
//     return (
//             <div>
//                 <h1>{state.Subject}</h1>
//                 <h1>{state.Trainer}</h1>
//                 <button onClick={nextName}>Next</button>
//                 <button onClick={changeName1}>Prev</button>
//             </div>
//     )
// }
// export default Cfc

//! .........................................................................

// & class base component
// import React, { Component } from 'react'

// export default class Cfc extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             count:0
//         }
//     }
//     Increment =()=>{
//         this.setState({count:this.state.count+1})
//     }
//     Decrement =()=>{
//         this.setState({count:this.state.count-1})
//     }
//     Reset=()=>{
//         this.setState({count:0})
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={this.Decrement}>Decrement</button>
//         <button onClick={this.Reset}>Reset</button>
//       </div>
//     )
//   }
// }

// ................................................................

// import React from 'react'
// import React,{useState} from 'react'

// const Cfc = () => {
//     let [count,setCount]=useState(0)

//     let Increment=()=>{
//         setCount((count)=>count +10)      //without arrow function it will execute
//     }
//     let Decrement =()=>{
//         setCount((count)=>count -10)
//     }
//     let Reset =()=>{
//         setCount(0 )
//     }
//     let getcolor=()=>{
//         if(count>0){
//             return "Green"
//         }
//         else if(count<0){
//             return "Red"
//         }
//         else{
//             return "blue"
//         }
//     }

//   return (
//     <div>
//         <h1 style={{color:getcolor()}}>{count}</h1>
//         <button onClick={Increment}>Increment</button>&nbsp;
//         <button onClick={Decrement}>Decrement</button>&nbsp;
//         <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default Cfc 

// ................................................................

// import React,{useState} from 'react'
// import { useState } from 'react';

// const Cfc = ()=>{
//     let [state,setState]=useState(0)
//     let Increment=()=>{
//         // setState((prev)=>prev +10)
//         // setState((prev)=>prev +10)
//         setState(state+10)
//         setState(state+10)
//         setState(state+20)
//     }
//     return(
//         <div>
//             <h1>{state}</h1>
//             <button onClick={Increment}>Increment</button>
//         </div>
//     )
// }
// export default Cfc
// .........................................................

// &state update using change the photos birds animals pictrure

import {faker} from "@faker-js/faker"
import {useState} from 'react'

const Cfc = () => {
    let [state,setState] = useState(faker.image.animals)
    let [value,setValue] = useState(" ")
    let changeImage = ()=>{
        setState(faker.image.avatar())
    }
    let changeName = ()=>{
        setValue(faker.image.avatar())
    }
  return (
    <div>
        <img src={state} alt={state}/>
        <img src={value} alt={value}/>
        <button onClick={changeImage}>Click here</button>
        <br></br>
        <button onClick={changeName}>Name</button>
    </div>
  )
}

export default Cfc