import React, { useState } from "react";
import "./styles.css";
import Logo from "../assets/LogoWaxyLetrasFundoT.png";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={Logo} width="200px" />
      </a>

  <button className="menu-toggle" onClick={toggleMenu}>
        
        <span className={isOpen ? "bar bar-1 active" : "bar bar-1"}></span>
        <span className={isOpen ? "bar bar-2 active" : "bar bar-2"}></span>
        <span className={isOpen ? "bar bar-3 active" : "bar bar-3"}></span>

      </button>

      
      <div className={isOpen ? "menu-nav menu-nav-active" : "menu-nav"}>
      <div className="menu-nav">
        
      </div>
        <div className={isOpen ? "menu-nav menu-nav-active" : "menu-nav"}>
          <a href="/" className="nav-link">
            <span className="hover">
              <Link className="nav-link" to="/">
                {" "}
                Home{" "}
              </Link>
            </span>
          </a>
          <a href="/servicos" className="nav-link">
            <span className="hover">
              {" "}
              <Link to="/servicos"> Serviços </Link>{" "}
            </span>
          </a>
          <a href="/contato" className="nav-link">
            <span className="hover">
              <Link to="/contato"> Contato </Link>
            </span>
          </a>
          <a href="" className="nav-link">
            <span className="hover">
              <Link to="/portfolio"> Portifolio </Link>
            </span>
          </a>
        </div>

        <Link className="nav-link" to="/portfolio">
          {" "}
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
