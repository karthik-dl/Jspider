import React, { useState } from 'react'
import image1 from "../../images/PanCake.jpeg"
import image2 from "../../images/ambasider.jpeg"
import image3 from "../../images/himalayan.jpeg"
import image4 from "../../images/hunter360.jpeg"
import image5 from "../../images/mt15.jpeg"
import SliderImgStyle from "./SlidingImage.module.css"

const SlidingImages = () => {

    let images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]
    let [currentIndex, setCurrentIndex] = useState(0)
    let nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }

    let preImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
    return (
        <div>
            <div className={SliderImgStyle.slider}>

                <button onClick={preImage}>previous</button>
                <img src={images[currentIndex]} alt="" />
                <button onClick={nextImage}>next</button>
            </div>
        </div>

    )

}

export default SlidingImages