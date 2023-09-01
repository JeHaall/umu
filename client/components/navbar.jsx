import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/Navbar.css'

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  var menu = document.getElementsByClassName("menu");
  menu.onClick = function(){
    menu.classList.toggle("openmenu");
  }
  
  return (
    <>
      <nav>
        <Link to="/" className='home'>
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </Link>
        
        <div className="menu" id={menuOpen ? "menuOpen" : "menu"} onClick={() => setMenuOpen(!menuOpen)}>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </div>
        
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <div className="login">
              <button className="loginBtn">Login</button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default navbar
