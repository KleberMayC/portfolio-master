import React from "react";
import Insta from "../../assets/insta.png";
import Discord from "../../assets/discord.png";
import "./contato.css";

const Contato = () => {
  return (
    <div className="Contato">
      <div className="titlee">
        <h1>
          Nossas redes <span className="roxos">Sociais</span>
        </h1>
      </div>
      <div className="redes">
        <div className="instagram">
          <a blank_ href="https://www.instagram.com/waxycode/">
            <img src={Insta} alt="Instagram" width="50px" />
          </a>
        </div>
        <div className="discord">
          <a href="https://discord.gg/fhNRZbJF">
            <img src={Discord} alt="Discord" width="70px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
