import React, { useState } from 'react'
import { imageData } from './SliderData'

const ImageSlider = ({imageData}) => {

    let [state,setState]= useState(0)

let nextSlide =()=>{
    setState((state+1) % imageData.length)
}

let prevSlide=()=>{
    setState((state-1 + imageData.length) % imageData.length)
}
  return (
    <div>
        <button onClick={prevSlide}>Previous</button>
        <img src={imageData[state]} alt={`Slider ${state +1}`}  height={"100px"}/>
        <button onClick={nextSlide}>Next</button>
    </div>
  )
}

export default ImageSlider