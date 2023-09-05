import React from "react";
import './Exhibition.css'
import {FiCircle} from 'react-icons/fi'
import Intern from '../../assets/images/intern.jpg'

function Exhibition() {
  return (
    <div className="exhibition-page">
      <div className="About-page">
        <div className="background">
          <h2>EXHIBITION</h2>
          <div className="about-icon">
            <p>home</p>
            <p>
              {" "}
              <FiCircle />{" "}
            </p>
            <p>Exhibition Class</p>
          </div>
        </div>
      </div>
      <div className="exhibition-about">
        <h2>EXHIBITION CLASS</h2>
        <p>
          The Exhibition Class is a fully subsidized two-month program aimed at
          equipping individuals with essential tech skills, especially those who
          may not have the financial capacity to enroll in our intensive
          programs. The program meets once per week and requires only a nominal
          application fee of 10,000
        </p>
      </div>
      <img src={Intern} alt="" className="exhibition-image" />
    </div>
  );
}

export default Exhibition;
