// import "./navbar.css";
import "./styles.css";
import Logo from "../../assets/LogoWaxyLetrasFundoT.png";

import { Link } from "react-router-dom";
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
const Navbar = () => {
  return (
    <header>
      <nav>
        <div class="logo">
          <a href="#">Logo</a>
        </div>
        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );

};

export default Navbar;
