import React,{useEffect} from 'react'
import "./Maain.scss";
import "./Main.css"
// import "../../Global.css"
import img1 from "../../Assets/Bora Bora.jpg";
import img2 from "../../Assets/Macchu Pichu.jpg"
import img3 from "../../Assets/Bora Bora.jpg";
import img4 from "../../Assets/angkor wat.jpg";
import img5 from "../../Assets/Bali Island.jpg";
import img6 from "../../Assets/cappadocia.jpg";
import img7 from "../../Assets/Taj Mahal.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    image: img1,
    destTitle: "Bora Bora",
    location: "New zealand",
    grade: "cultural Relax",
    fees: "$700",
    description: `A lagoon of incomparable beauty. Discover, the glorious island paradise of Bora Bora in French Polynesia.
     A dream destination famous for its turquoise lagoon and superb white sandy 
     beaches, which make it the perfect setting for watersports, relaxation and romance.`
  },
  {
    id: 2,
    image: img2,
    destTitle: "Macchu Pichu",
    location: "Pera",
    grade: "cultural Relax",
    fees: "$500",
    description: `Machu Picchu is an original word of the language known as Quechua.
     The literal translation of Machu Picchu is “Old Mountain”. Machu translates to Old while the meaning of Picchu can vary. 
     This can mean Pyramid, Mountain, or Chewed Coca Leaves.`
  },
  {
    id: 3,
    image: img3,
    destTitle: "Bora Bora",
    location: "New zealand",
    grade: "cultural Relax",
    fees: "$700",
    description: `A lagoon of incomparable beauty. Discover, the glorious island paradise of Bora Bora in French Polynesia.
     A dream destination famous for its turquoise lagoon and superb white sandy 

     beaches, which make it the perfect setting for watersports, relaxation and romance.`
  },
  {
    id: 4,
    image: img4,
    destTitle: "angkor wat",
    location: "Combodia",
    grade: "cultural Relax",
    fees: "$600",
    description: `Angkor is one of the most important archaeological sites in South-East Asia. 
    Stretching over some 400 km2, including forested area, 
    Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire,
     from the 9th to the 15th century`
  },
  {
    id: 5,
    image: img5,
    destTitle: "Bali Island",
    location: "Indonasia",
    grade: "cultural Relax",
    fees: "$800",
    description: `Bali Island is a small beautiful island and a part of Indonesia's archipelago, 
    and the most famous of Indonesian tourism in the world. 
    It owns the panorama and unique culture that makes this island exclusive to others.
     Furthermore, Its location is in the tropical situation as Dream Island for a vacation.`
  },
  {
    id: 6,
    image: img6,
    destTitle: "cappadocia.",
    location: "Turkey",
    grade: "cultural Relax",
    fees: "$500",
    description: `Although Cappadocia is a destination a bit far from 
    Istanbul you will be able to accommodate the route to get the most out of your trip, 
    getting to know various points of interest without spending too much.`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
  {
    id: 7,
    image: img7,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: "cultural Relax",
    fees: "$500",
    description: `Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. 
    Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. 
    Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal..`
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
}, [])
  return (
    <section data-aos="fade-up" className='main container section'>
      <div className="secTitle">
        <h1 data-aos="fade-right" className='title'>
          Most visited Destinations
        </h1>
      </div>

      <div className='secContent grid'>
        {Data.map(({ id, image, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={image} alt={destTitle} height={"130px"} width={"250px"} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className='content flex'>
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className="icon"/>
                </button>
              </div>
            </div>
          )

        })}

      </div>
    </section>
  )
}

export default Main