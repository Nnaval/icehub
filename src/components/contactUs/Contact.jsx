import React from "react";
import "./Contact.css";
import { FiCircle } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Carol from "../../assets/images/carousel.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div className="contact-page">
      <div className="background">
        <h2>Contact Us</h2>
        <div className="about-icon">
          <p>home</p>
          <p>
            {" "}
            <FiCircle />{" "}
          </p>
          <p>contact</p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-head">
          <h3>Contact Us</h3>
          <h2>If You Have Any Query, Feel Free To Contact Us</h2>
          <div className="empty-class"></div>
        </div>
        <div className="whole">

        
        <div className="contact-phone">
          <div className="contact-inner">
            <div className="contact-tel-icon">
              <BsFillTelephoneFill />
            </div>
            <div>
              <p>Call to ask any question </p>
              <p className="contact-num">
                (+234) <br /> 7015815801
              </p>
            </div>
          </div>
        </div>
        <div className="contact-address-con">
          <div className="contact-icon">
            <HiOutlineLocationMarker />
          </div>
          <p>
            {" "}
            No 270 Old Onitsha Road, bethel building Opp. Anglican Girls Sec.
            School junction (Nnewi) Anambra, Nigeria.
          </p>
        </div>
        <div className="mail">
          <div className="mail-icon">
            <HiOutlineMail />
          </div>
          <p>contacticehub@gmail.com</p>
        </div>
      </div>
      </div>
        <div className="last-contact">

      <div className="form-contact contact-form">
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="textarea" placeholder="Your Messages" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="empty-contact"></div>
        </div>
    </div>
  );
}

export default Contact;
