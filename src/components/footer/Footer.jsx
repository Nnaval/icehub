import React from "react";
import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div className="foot-input">
          <h2>ICEHUB</h2>
          <span className="inputSpan">
            <input type="email" placeholder="Your Email" />
            <button>Sign Up</button>
          </span>
        </div>

        <div className="socials">
          <div className="one">
            <h2>Get In Touch</h2>
            <div className="empty-class"></div>
            <div className="InTouch">
              <span className="address">
                <CiLocationOn className="inTouch-icon" />
                No 270 Old Onitsha Road, bethel building Opp. Anglican Girls
                Sec. School junction (Nnewi) Anambra, Nigeria.
              </span>
              <span className="address">
                <HiOutlineMail className="inTouch-icon" />
                contacticehub@gmail.com
              </span>
              <span className="address">
                <AiOutlinePhone className="inTouch-icon" />
                (+234) 7015815801
              </span>
            </div>

            <div className="social-account">
              <span> 
                <AiFillTwitterCircle className="social-account-icon" />
                <BiLogoFacebookCircle className="social-account-icon" />
                <AiOutlineInstagram className="social-account-icon" />
              </span>
            </div>
          </div>
          <div>
            <div className="quick-links">
              <h2>Quick Links</h2>
              <div className="empty-class"></div>
              <ul className="quick-links-list">
                <li>
                  {" "}
                  <BsArrowRightShort className="links-icon" /> Home
                </li>
                <li>
                  {" "}
                  <BsArrowRightShort className="links-icon" />
                  About US
                </li>
                <li>
                  {" "}
                  <BsArrowRightShort className="links-icon" />
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="last">© ICEHUB. All Rights Reserved. Designed by ICEHUB</p>
    </div>
  );
}

export default Footer;
