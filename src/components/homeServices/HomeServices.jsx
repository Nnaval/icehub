import React from "react";
import "./HomeServices.css";
import { TbMilitaryAward } from "react-icons/tb";
import { MdMobileFriendly } from "react-icons/md";
import { MdSafetyDivider } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

function HomeServices() {
  const box = [
    {
      icon: <TbMilitaryAward />,
      content: "Web Development",
    },
    {
      icon: <MdMobileFriendly />,
      content: "Mobile Application Development",
    },
    {
      icon: <MdSafetyDivider />,
      content: "StartUps",
    },
    {
      icon: <MdDeveloperBoard />,
      content: "Back-End Development",
    },
    {
      icon: <MdDesignServices />,
      content: "Product Design (UI/UX)",
    },
  ];

  return (
    <div className="HomeServices">
      <h2>OUR SERVICES</h2>
      <div className="empty-class"></div>
      <div className="box-services ">
        {box.map((write, index) => (
          <>
            <div className="box-serv ">
              <div className="box-icon">
                <p className="icon-box"> {write.icon} </p>
              </div>
              <p>{write.content}</p>
            </div>
          </>
        ))}
      <div className="call-us">
        <h2>Call US</h2>
        <h2>+23407045375814</h2>
      </div>
      </div>
    </div>
  );
}

export default HomeServices;
