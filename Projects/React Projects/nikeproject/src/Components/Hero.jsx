import React from 'react'
import Amazon from "../Images/Amazon-logo.png"
import flipkart from "../Images/flipkart-logo.png"
import Ajio from "../Images/ajio-logo.png"
import shoe from "../Images/shoe4.jpg"


const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>YOUR FEET <br/>DESERVES <br/>THE BEST</h1>
            <p>YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
                SHOES .YOUR  FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
                SHOES.
            </p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className='shopping'>
                <p>Also Available on</p>

                <div className='brand-icons'>
                    <img src={Amazon} alt="Aimage" />
                    <img src={flipkart} alt="fimage" />
                    <img src={Ajio} alt="Aimage" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src={shoe} alt="himage" />
        </div>
    </div>
  )
}

export default Hero