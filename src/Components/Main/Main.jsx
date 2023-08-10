import "./main.css"
import React, {useEffect} from 'react'
import img1 from '../../Assets/ph1.jpeg'
import img2 from '../../Assets/ph2.jpeg'
import img3 from '../../Assets/ph3.jpeg'
import img4 from '../../Assets/ph4.jpeg'
import img5 from '../../Assets/ph5.jpeg'
import img6 from '../../Assets/ph6.jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[{
  id:0,
  imgSrc:img1,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

},
{
  id:1,
  imgSrc:img2,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

},{
  id:2,
  imgSrc:img3,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

},{
  id:3,
  imgSrc:img4,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

},{
  id:4,
  imgSrc:img5,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

},{
  id:5,
  imgSrc:img6,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum accusamus omnis libero autem consequatur rerum sit, doloribus porro! Necessitatibus ut dolore vel assumenda numquam enim at tenetur maxime quod.',

}]

export default function Main() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, [])
  return (
    <section className="main container section">
      <div data-aos="fade-right" className="setTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="setContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} srcset="" />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
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
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}


