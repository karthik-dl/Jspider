// & useRef  by using class base component we have to use for only media playback

// import React, { Component, createRef } from 'react'

// export default class Child extends Component {
//     constructor(props) {
//         super(props)

//         this.inputRef=createRef()
//     }
//     changeColor=()=>{
//         this.inputRef.current.style.background="lightblue"
//         this.inputRef.current.placeholder="Please enter your Name..?"
//         this.inputRef.current.style.color="white"
//         this.inputRef.current.style.fontSize="40px"
        // this.inputRef.current.style.fontWeight="50"
//         this.inputRef.current.style.width="500px"
//         this.inputRef.current.style.height="200px"
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.inputRef} style={{color:"green"}}/>
//                 <button onClick={this.changeColor}>Submit</button>
//             </div>
//         )
//     }
// }
// !==================================================================================


// & useRef by using functional base component

// import React,{createRef} from 'react'

// const Child = () => {
//     let inputRef=createRef(null)
//     let onChangeColor=()=>{
//         inputRef.current.style.background="lightblue"
//         inputRef.current.placeholder="Please enter your Name..?"
//         inputRef.current.style.color="white"
//         inputRef.current.style.fontSize="40px"
//     }
     // let onChangeClear=()=>{
     //     inputRef.current.style.background="black"
     // }
//   return (
//     <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={onChangeColor}>Submit</button>
//         {/* <button onClick={onChangeClear}>Previous</button> */}
//     </div>
//   )
// }

// export default Child

// !==================================================================

import React, { useRef, useState } from 'react'
import VIDEO from "./RCB.mp4"

const Child = () => {
  let videoRef=useRef(null)
  let [play ,setPlay]=useState(true)
  let [text,setText]=useState()

  let PlayorPause=()=>{
    setPlay(!play)
    if(play===true){
      videoRef.current.play()
      setText("video is playing..............")
    }
    else{
      videoRef.current.pause()
      setText("video is paused")
    }
  }

  return (
    <div>
      <h1>{text}</h1>
      <video src={VIDEO} ref={videoRef} onClick={PlayorPause} height="400" width="400"></video>
    </div>
  )
}

export default Child