import React ,{useEffect} from 'react';
import "./home.css";
import "./Home.scss";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import video from "../../Assets/nature_-_31377 (1080p).mp4";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
      Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" height={"auto"}></video>

      <div className='homeContent container'>
        <div className="textDiv">
          <span data-aos="fade-up" className='smallText'>
            Our Packages
          </span>
          <h1  data-aos="fade-right" className='homeTitle'>
            Search your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
            <div className="input flex">
              <input type='text' placeholder='Enter your place..' />
              <GrLocation className="icon" />
            </div>
          </div>



          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type='date' />
            </div>
          </div>



          <div className="priceInput">
            <div className='label_input flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className="total">$5000</h3>
            </div>

            <div className="input flex">
              <input type='range' max="5000" min="1000" />
            </div>
          </div>

          <div className='searchOptions flex'>
          <HiFilter className='icon'/>
          <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
          <FiFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <FaTripadvisor className="icon"/>
          </div>

          <div data-aos="fade-up" className='leftIcons'>
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home