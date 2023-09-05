import React from "react";
import "./Home.css";
import { BsPeople } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'
import { CiMedal } from 'react-icons/ci'
import HomeAbout from "../homeAbout/HomeAbout";
import Choose from "../homeChoose/Choose";
import HomeService from '../homeServices/HomeServices'
import HomeContact from '../homeContact/HomeContact'
import IceHomeImage from "../../assets/images/IceHomeImage1.jpg";

function Home() {
  return (
    <div className="home ">
      <div className="home-sec animated wow zoomIn">
        <div className="text animated wow zoomIn ">
          <p className="home-pa ">CREATIVE & INNOVATIVE</p>
          <h2>Creative & Innovative Digital solution</h2>
          <button className="text-btn">Contact Us</button>
        </div>
      </div>
        <div className="members  animated wow zoomIn" data-wow-delay="2s">
          <div className="intern">
            <span className="intern-icon"> <BsPeople /> </span>  
            <div className="dive">
              <p>INTERN</p>
              <p>200</p>
            </div>
          </div>
        <div className="intern sec-tab">
            <span  className="intern-icon sec-tab-icon"> <BsCheckLg/> </span>
            <div className="dive">
              <p>PROJECTS</p>
              <p>50</p>
            </div>
          </div>
        <div className="intern">
          <span  className="intern-icon bo-icon"> <CiMedal/> </span>
          <div className="dive">
            <p className="booo">TEAM MEMBERS</p>
            <p>7</p>
          </div>
        </div>
        </div>

        <div className="HomeAbout-section">
          <HomeAbout/>
        </div>
          <Choose/>
          <HomeService/>
          <HomeContact/>
          

    </div>
  );
}

export default Home;
