import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiDownArrowAlt } from 'react-icons/bi'


function NavBar() {
const [ open, setOpen] = useState(false);
const changeMenu = ()=>{
setOpen(!open);
}

const [inner, openInner] = useState(false);
const toggleMenu = ()=>{
  openInner(!inner)
}

  return (
    <div className="header">

      <div className="title">
        <h1>ICEHUB</h1>
        <ul className={`${!open && 'hide'} nav`}>

          <li> <Link to ='/home'> Home </Link></li>
          <li> <Link to='/about'>About</Link> </li>
            <div className="inner-tag" > 
          <li onClick={toggleMenu}>
                Learning <BiDownArrowAlt/>
               
               {inner && (        
                <ul className="inner-list">
                    <li> <Link to="/essen">  Essential Class </Link></li>
                    <li> <Link to='/advance'> Advanced Class </Link></li>
                    <li> <Link to='/skit'> SKIT </Link></li>
                    <li> <Link to ='/exhibition'> Exhibition Class  </Link></li>
                </ul>
                )}
            
            </li>
            </div>
          <li> <Link to ='/contact'> Contact </Link> </li> 
        </ul>
      </div>
<AiOutlineMenu className="menu-icon" onClick={changeMenu} />
    </div>
  );
}

export default NavBar;
