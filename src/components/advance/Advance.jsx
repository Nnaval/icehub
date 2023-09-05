import React from "react";
import "./Advance.css";
import { FiCircle } from "react-icons/fi";
import Girls from '../../assets/images/Girls.jpg'

function Advance() {
  return (
    <div className="advance-page">
      <div className="About-page">
        <div className="background">
          <h2>Advance Class</h2>
          <div className="about-icon">
            <p>home</p>
            <p>
              {" "}
              <FiCircle />{" "}
            </p>
            <p>Advance Class</p>
          </div>
        </div>
      </div>

      <div className="advance-about">
        <h2>ADVANCED CLASS</h2>
        <div className="empty-class"></div>
        <p>
          Our Advanced class serves as a continuation of our Essential class,
          offering a comprehensive 3-month program that includes a paid
          internship. This program is ideally suited for individuals seeking to
          advance their technical skills and become a full stack developer. A
          laptop is required for participation in this program, and there is a
          tuition fee of 100,000. Participants can expect to gain expertise in
          Back-End Development, which encompasses a range of topics such as
          Object Oriented Programming, Java script designs, Introduction to
          databases, back-end logic, Patterns, and Application Programming
          Interface (API) development. This intensive program provides a unique
          opportunity for individuals to enhance their skills and gain practical
          experience in advanced programming
        </p>
      </div>

      <img src={Girls} alt="" className="advance-image"/>
    </div>
  );
}

export default Advance;
