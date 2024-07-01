import React,{useEffect} from 'react'
import "./Footer.scss";
import video2 from "../../Assets/seavideo2.mp4"
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {

  
  useEffect(()=>{
    Aos.init({duration: 2000})
}, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv  flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter the E-mail Address" />
            <button data-aos="fade-up" className="btn flex" type='submit'>SEND <FiSend className="icon" /></button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdTravelExplore className="icon" />Travel...
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores mollitia velit deleniti aliquid? Tempora
              voluptatum ipsam dolor sapiente quibusdam veritatis
              ipsa eos eligendi incidunt, facilis dolorum adipisci
              reiciendis aliquam natus!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
              {/* Group one */}
            <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Services
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Insurance
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Agency
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Tourism
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* group two */}
            <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Bookings
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                RentCars
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                HostelWorld
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Trivogo
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* group three */}
            <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                LonDon
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                California
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Indonasia
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Europe
              </li>


              <li className='footerList flex'>
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div data-aos="fade-up" className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer