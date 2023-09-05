import React from "react";
import "./HomeContact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaReply } from "react-icons/fa";

function HomeContact() {
  return (
    <div className="home-con">
      <div className="home-con-head">
        <h1>Please Feel Free to Contact Us</h1>
        <div className="empty-class"></div>
        <div className="div">
          <span>
            {" "}
            <FaReply />{" "}
          </span>
          <span>Reply within 24 hours</span>
        </div>
        <div className="div">
          <span>
            {" "}
            <BsFillTelephoneFill />{" "}
          </span>
          <span>24 hrs telephone support</span>
        </div>

        <div className="telephone tel-contact">
          <div className="tel-icon">
            <BsFillTelephoneFill />
          </div>
          <div>
            <p>Call to ask any question </p>
            <p className="num">
              (+234) <br /> 7015815801
            </p>
          </div>
        </div>
      </div>

      <div className="form-contact">
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="textarea" placeholder="Your Messages" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default HomeContact;
