import React from "react";
import "./Choose.css";
import { FaDiceD6 } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import ChooseImage from "../../assets/images/ChooseImage.jpeg";

function Choose() {
  return (
    <div className="main-con ">
      <div className="chooseHead ">
        <h3>WHY CHOOSE US</h3>
        <h1>We Are Here to Grow Your Knowledge</h1>
        <div className="empty-class"></div>
      </div>
      <div className="services">
        <div className="left-services">
          <div className="industry">
            <span className="service-icons">
              {" "}
              <FaDiceD6 />{" "}
            </span>
            <span> Best In Industry</span>
          </div>
          <div className="winning">
            <span className="service-icons">
              {" "}
              <CiMedal />{" "}
            </span>
            <span>Award Winning</span>
          </div>
        </div>
        <img src={ChooseImage} alt="" className="choose-image" />
        <div className="right-services">
          <div className="staff">
            <span className="service-icons">
              {" "}
              <BsPeopleFill />{" "}
            </span>
            <span>Professional Staff</span>
          </div>
          <div className="support  staff">
            <span className="service-icons">
              {" "}
              <BsFillTelephoneFill />{" "}
            </span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
