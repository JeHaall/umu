# Old navbar code
<nav>
    <div className="navbar">
        <div className="navbar-logo">
        <FontAwesomeIcon icon={faHouse} size="2xl" />
        </div>

        <div className="menu">

          <div className="menu-links">
              <a href="#">*Make the logo jump into navbar on scroll down*</a>
              <a href="#">How it works</a>
          </div>
        </div>
        
        <div className="navbar-login">
          <button className="login">Login</button>
        </div>

        <div className="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
    
    <a href="#" className="brand">Herdoy</a>
    <ul className={active}>
        <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
        <li className="nav_item"><a href="#" className="nav_link">About</a></li>
        <li className="nav_item"><a href="#" className="nav_link">App</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
    </ul>

    <div onClick={navToggle} className={toggleIcon}>
        <div className = "line1"></div>
        <div className = "line2"></div>
        <div className = "line3"></div>
    </div>
</nav>

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

.navbar {
  margin: 0;
  padding: 1rem;
  height: auto;
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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

.navbar .menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .menu-links {
  color: black;
}

.navbar .menu-links a {
  padding: 0 1rem;
}
/*
.navbar .menu-links a:hover {
  color: white;
}*/


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

.navbar .login {
  font-weight: ;
  padding: ;
  background-color: transparent;
  color: black;
  border-radius: 10px;
  border: 2px solid black;
  transition: 0.2s;
}

.navbar .login:hover {
  background-color: #0aa5ff;
  color: black;
}

.navbar .menu-btn {
  display: none;
}

li {
  list-style: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background-color: rgb(18, 106, 118);
  
}

.brand {
  text-transform: uppercase;
  font-weight: bold;
}

.nav_menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
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

/*https: //stackoverflow.com/a/20297912 + https: //css-tricks.com/snippets/css/media-queries-for-standard-devices/*
/* SMARTPHONES PORTRAIT */
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
  
  .navbar .menu-btn {
    font-size: 32px;
    color: black;
    display: flex;
    justify-content: end;
    cursor: pointer;
  }
  
  .nav_toggler {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .nav_menu {
    position: fixed;
    top: 7vh;
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

/* SMARTPHONES LANDSCAPE */
@media only screen and (min-width: 480px) and (max-width: 767px) and (orientation : landscape) {}

/* TABLETS PORTRAIT */
@media only screen and (min-width: 768px) and (max-width: 1023px) {}

/* TABLET LANDSCAPE / DESKTOP */
@media only screen and (min-width: 1024px) and (max-device-width : 1823px) {}

/* LARGE SCREENS */
@media only screen and (min-width: 1824px) {}

@media (max-width: 40rem) {}

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

  .navbar .menu-btn {
    color: white;
  }
}
