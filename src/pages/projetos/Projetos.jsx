import React from "react";


import Logo1 from "../../assets/logo/logo1.jpeg";
import Logo2 from "../../assets/logo/logo2.jpeg";
import Logo3 from "../../assets/logo/logo3.jpeg";
import Logo4 from "../../assets/logo/logo4.jpeg";
import Logo5 from "../../assets/logo/logo5.jpeg";

import "./projetos.css";
const Projetos = () => {
  return (
    <div className="Projetos">
      <div className="titlees">
        <h2>
          Conheça nossos <span className="roxos">Projetos</span>{" "}
        </h2>
      </div>
      <div className="sites">
        <h1 className="titles">
          Site desenvolvido pelo Grupo Waxy <span className="roxos"> Code</span>
        </h1>
        <div className="websites">
          <a href="">
            <img src={Logo1} width="600px" />
          </a>
        </div>

        <div className="sites">
          <div className="titles">
            <h1>Logotipos desenvolvidos pelo nosso time de <span className="roxos">Designers</span> </h1>
          </div>
          <div className="designer">
            <img src={Logo1} width="200px" />

            <img src={Logo2} width="200px" />

            <img src={Logo3} width="200px" />

            <img src={Logo4} width="200px" />

            <img src={Logo5} width="200px" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
