// import React from 'react'
// import Childprops from './Childprops'

// const Parentprops = () => {
//   return (
//     <div>
//         <h1>Hi iam props is used to pass the data from parent to child component</h1>
//         <Childprops name="Karthik" subject="ReactJs"/>
//     </div>
//   )
// }

// export default Parentprops

// !.......................................................


// import React from 'react'
// import Childprops from './Childprops';

// const Parentprops = () => {
//   return (
//     <div>
//       <Childprops
//       userName="CuteBoy"
//       Salary={"50000k"}
//       Com_id={"123"}
//       Languages={["kannada","English","Telugu"]}
//       Course={["HTML","Reactjs","MERNJs",]}/>
//     </div>
//   )
// }

// export default Parentprops
// ..............................

// import React, { useState } from 'react'
// import PRODUCT from "./Git.json"
// import Childprops from './Childprops'

// const Parentprops = () => {
//   let [state,setState]=useState({
//     Course:["HTML","Reactjs","MERNJs",]})

//     let changeName=(username)=>{
//       return username
//     }

//   return (
//     <div>
//     <Childprops changeName={changeName} state={state} PRODUCT={PRODUCT}/></div>
//   )
// }


// export default Parentprops

// .........................................................

// import React from 'react'
// import {useState} from 'react'
// import Childprops from './Childprops';

// const Parentprops = () => {
//   let [count,setCount]=useState(0)

//   let Increment=()=>{
//     setCount(count=>count+1)
//   }
//   let Decrement=()=>{
//     setCount(count=>count-1)
//   }
//   let Reset=()=>{
//     setCount(0)
//   }
//   let getColor=()=>{
//     if(count>0){
//       return "red"
//     }
//     else if(count<0){
//       return "pink"
//     }
//     else{
//       return "blue"
//     }
//   }
//   return (
//     <div>
//       <h1 style={{color:getColor()}}>{count}</h1>

//       <Childprops Increment={Increment} Decrement={Decrement} Reset={Reset} />
//     </div>
//   )
// }

// export default Parentprops

// !........................................................

// & Props types

import React from 'react'
import Childprops from './Childprops'

const Parentprops = () => {
  return (
    <div><Childprops usename="Vivek" subject="ReactJs"
    id={{name:"Vivek"}}
    yes={true}/>
    </div>
  )
}

export default Parentprops