import React, {useState} from 'react';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/general.css'

function useHideOnScroll(ref) {
  useEffect(() => {
    const handleScroll = () => {
      if (document.nav.scrollTop > 20 ) {
        ref.current.style.top = '0';
      } else {
        ref.current.style.top = '-50px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
}

function navbar() {
  const navbarRef = React.useRef(null);
  useHideOnScroll(navbarRef);

  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  
  const navToggle = () => {
    active === 'nav_menu' 
      ? setActive("nav_menu nav_active") 
      : setActive("nav_menu");

    //TogglerIcon
    toggleIcon === "nav_toggler" 
    ? setToggleIcon("nav_toggler toggle")
    :setToggleIcon("nav_toggler");
  }

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <a href="#"><FontAwesomeIcon icon={faHouse} size="2xl" /></a>
        </div>
        
        <ul className={active}>
          <li className="nav_item"><a href="#" className="nav_link">*Applogo into navbar*</a></li>
          <li className="nav_item"><a href="#" className="nav_link">How it works</a></li>
        </ul>

        <div className="navbar-login">
          <button className="login">Login</button>
        </div>

        <div onClick={navToggle} className={toggleIcon}>
          <div className = "line1"></div>
          <div className = "line2"></div>
          <div className = "line3"></div>
        </div>
      </nav>
    </>
  )
}

export default navbar
