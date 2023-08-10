import React,{useEffect} from 'react'
import video1 from '../../Assets/video1.mp4'
import "./footer.css"
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="seeContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small data-aos="fade-up">KEEP IN TOUCH</small>
            <h2 data-aos="fade-up">Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>SEND <FiSend className='icon'/></button>
          </div>
        </div>

        <div  className="footerCard flex">
          <div data-aos="fade-up" className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon"/>Travel.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum incidunt asperiores necessitatibus consequatur perferendis ex at commodi sequi nobis accusamus nam nemo dignissimos, beatae iusto repellat ut tempora quidem a.
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
              
            </div>
          </div>

          <div className="footerLinks grid">
            {/*Group1*/}
            <div data-aos="fade-up" className="linkGroup">
              <span className="froupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>
            {/*Group2*/}
            <div data-aos="fade-up" className="linkGroup">
              <span className="froupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>
            {/*Group3*/}
            <div data-aos="fade-up" className="linkGroup">
              <span className="froupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - Md Tanjir Hossain-2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

