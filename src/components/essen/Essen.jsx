import React from "react";
import "./Essen.css";
import { FiCircle } from "react-icons/fi";
import EssenImage from '../../assets/images/EssenImage.jpg'

function Essen() {
  return (
    <div className="essen">
      <div className="About-page">
        <div className="background">
          <h2>Essential</h2>
          <div className="about-icon">
            <p>home</p>
            <p>
              {" "}
              <FiCircle />{" "}
            </p>
            <p>Essential Class</p>
          </div>
        </div>
      </div>

        <div className="essen-body">
          <h2>ESSENTIAL CLASS</h2>
          <div className="empty-class"></div>
          <p>
            Our comprehensive 3-month Front-End Development program is designed
            to equip participants with the skills necessary for Web, Software,
            Mobile App, and Product Design. This program includes a paid
            internship, with a tuition fee of 100,000. A laptop is a
            prerequisite for this training, and while we highly recommend
            bringing your own device to enhance your learning experience,
            temporary laptops can be provided to participants who do not have
            one. By completing this program, participants can expect to gain
            practical skills and expertise in Front-End Development, preparing
            them for a successful career in the field.
          </p>
          <div className="empty-class"></div>
        </div>

        <img src={EssenImage} alt="" className="essen-image"/>
    </div>
  );
}

export default Essen;
