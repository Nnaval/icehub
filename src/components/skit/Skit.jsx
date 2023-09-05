import React from "react";
import "./Skit.css";
import { FiCircle } from "react-icons/fi";
import Child from '../../assets/images/Child.jpg'

function Skit() {
  return (
    <div className="skit-page">
      <div className="About-page">
        <div className="background">
          <h2>SKIT</h2>
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

      <div className="skit-about">
        <h2>SKIT</h2>
        <div className="empty-class"></div>
        <p>
          Our organization offers a specialized summer boot camp program called
          SKIT, designed for children with unique learning needs. Over the
          course of two months, our program provides comprehensive instruction
          in the fields of Coding, Robotics, and Machine Learning. Our SKIT
          program offers a unique opportunity for children between the ages of
          6-12 years to engage in STEM education through the use of Fischer
          Technik models. By participating in SKIT, children have the ability to
          transform their imagination and aspirations into tangible outcomes.
          This summer program runs from June to August, providing a dynamic and
          immersive learning experience for all participants.
        </p>
      </div>
      <img src={Child} alt="" className="skit-image" />
    </div>
  );
}

export default Skit;
