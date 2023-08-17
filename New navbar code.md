# New navbar code

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

*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: ;
  margin: ;
  padding: ;
  /* background-color: ; */
  font-family: ;
}

a {
  text-decoration: ;
}


.navbar .navbar-logo {
  padding: ;
  color: black;
  font-size: ;
}

.navbar .logo a {
  margin: 1rem;
  font-size: ;
  font-weight: ;
  color: ;
}

.navbar button {
  border: ;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

.navbar-login {
  border-left: 1px solid black;
  padding-inline-start: 1rem;
}

.navbar .navbar-login {
  font-weight: ;
  padding: ;
  background-color: transparent;
  color: black;
  border-radius: 10px;
  border: 2px solid black;
  transition: 0.2s;
}

.navbar .navbar-login:hover {
  background-color: #0aa5ff;
  color: black;
}

li {
  list-style: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: black;
  position: sticky;
  top: 0;
}


.nav_menu {
  display: flex;
  align-items: center;
  /*justify-content: space-around;*/
  padding-top: 2rem;
  gap: 2rem;
}

.nav_toggler div {
  width: 2.5rem;
  height: 0.2rem;
  /*margin: 0.4rem;*/
  border-radius: 9999px;
  background-color: white;
  transition: 0.2s ease-in;
}
.nav_toggler {
  cursor: pointer;
  display: none;
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}

@media only screen and (max-width: 479px) {
  .navbar .menu, .login {
    display: none;
  }
  
  .navbar {
    margin: 0;
    padding: 1rem;
    height: auto;
    background-color: beige;
  }
  
  .nav_toggler {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .nav_menu {
    position: fixed;
    top: 3rem;
    right: 0;
    width: 50%;
    height: 93vh;
    background: gold;
    z-index: 1;
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
  }
  
  .nav_active {
    transform: translateX(0);
  }
}

@media (prefers-color-scheme: light) {
  .navbar {
    background-color: black;
  }

  .navbar .navbar-logo {
    color: beige;
  }

  .navbar-login {
    border-left: 1px solid beige;
  }

  .navbar .login {
    background-color: black;
    color: beige;
    border: 2px solid beige;
  }

  .navbar .login:hover {
  color: beige;
  }
}
