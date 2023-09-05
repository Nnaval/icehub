import React from "react";
import "./HomeAbout.css";
import { FaCheck } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import AboutImage from '../../assets/images/AboutImage.jpg'

function HomeAbout() {
  return (
    <div className="HomeAbout">
      <div className="AboutUs">
        <div className="about">
          <h2>About US</h2>
          <div className="empty-class"></div>
          <p>
            We Help Young People; Nigerians, Africans Stat their Careers in
            Technology from Newbie to Full Stack Developer.
          </p>
        </div>
        <div className="award">
          <div className="left-check">
            <h4>
              {" "}
              <FaCheck className="icon"/> Award Winning{" "}
            </h4>
            <h4>
              {" "}
              <FaCheck className="icon"/> Professional Staff{" "}
            </h4>
          </div>
          <div className="right-check">
            <h4>
              {" "}
              <FaCheck className="icon"/> 24/7 Support{" "}
            </h4>
            <h4>
              {" "}
              <FaCheck className="icon"/> Fair Prices{" "}
            </h4>
          </div>
        </div>
        <div className="telephone">
            <div className="tel-icon">
            <BsFillTelephoneFill/>
            </div>
            <div >
            <p>Call to ask any question </p>
            <p className="num">(+234) <br /> 7015815801</p>
            </div>
        </div>
      </div>

      <div >
        <img src= {AboutImage} alt="" className="about-image"/>
      </div>
    </div>
  );
}

export default HomeAbout;
