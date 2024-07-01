import React from 'react'
import { Carousel} from  "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Responsivecarosoul = () => {
  return (
    <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2DKvqhyVtI8MMAC8j2oP-2-JRryjBkNGhA&usqp=CAU" alt ="pic" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU" alt="pic1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iWBTh073WPeugJmSx6kYS5xQb-tTYlNROSy8TeqcbvD99KtPIVXPHconfDovBo5eQx0&usqp=CAU" alt="pic3"/>
                    <p className="legend">Legend 2</p>
                </div>

                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u6_4OALQDJaY9EPmzp8E-35kSySl_vWqmg&usqp=CAU" alt="pic2" />
                    <p className="legend">Legend 2</p>
                </div>
    </Carousel>
  )
}

export default Responsivecarosoul