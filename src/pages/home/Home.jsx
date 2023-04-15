import React from "react";

import { Link } from "react-router-dom";

import "./home.css";
import Servicos from "../../components/servicos/Servicos";
import Sobre from "../../components/sobre/Sobre";
import minhaImagem from "../../assets/NightFade.png";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <section className="main">
      <div className="text" >
        <div className="dentroo">
          <h3>Criando a melhor experiencia para você</h3> <br></br>
          <br></br>
          <br></br>
          <h1>SOLUÇÕES </h1>
          <br></br>
          <h1>
            PARA <span className="roxos">EMPRESAS</span>{" "}
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Waxy Code cria e desenvolve a melhor solução para sua empresa ou
            servidor
          </p>
          <div className="button">
            <Link to="/portfolio"> Portifolio </Link>
            <Link to="/contato"> Contato</Link>
          </div>
        </div>
      </div>

      <Servicos />

      <Sobre />
      
    </section>
  );
};

export default Home;
