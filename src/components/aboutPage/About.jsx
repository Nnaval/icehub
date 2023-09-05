import React from 'react'
import './About.css'
import {FiCircle} from 'react-icons/fi'
import Carol from '../../assets/images/carousel.jpg'
import HomeAbout from '../homeAbout/HomeAbout'


function About() {
  return (
    <div className='About-page'>
        <div className="background">
          <h2>About Us</h2>
          <div className="about-icon">
            <p>home</p>
            <p> <FiCircle/>  </p>
            <p>About</p>
          </div>
        </div>
        <HomeAbout/>
    </div>
  )
}

export default About