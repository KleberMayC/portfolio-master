import React from "react";
import "./servicos.css";

const Servicos = () => {
  return (
    <section className="content">
      <div className="dentro">
        <div className="title">
          <h1>
            Tranformando
            <br />
            sonhos em <span>Realidade</span>
          </h1>
          <p className="paragrafo">
            Mas e o que fazemos para tornar tudo em realidade <br />
            para os nossos clientes?
          </p>
        
          <div className="servicos">
            <div className="grid-container">
              <div className="roxo">
                <div className="grid-item">
                  <h5>Desenvolvimento de Web Sites</h5>
                  <p>
                    Projetamos seus sites do 0 com a mais moderna forma de criar
                    Web Sites.
                  </p>
                </div>
              </div>

              <div className="grid-item">
                <h5>Desenvolvimento de servidores de Minecraft</h5>
                <p>
                  Desenvolvemos do 0 o seu servidor de Minecraft com os comandos e plugins 
                  que desejar, deixamos o servidor do jeito que sempre sonhou.
                </p>
              </div>
              <div className="roxo">
                <div className="grid-item">
                  <h5>Desenvolvimento de servidores de Discord</h5>
                  <p>
                    Desenvolvemos um servidor de discord com aparência que você
                    deseja e comandos programados pela Waxy Code.
                  </p>
                </div>
              </div>

              <div className="grid-item">
                <h5>Construções de Mapas para Minecraft</h5>
                <p>
                  Builds de mapas para servidor de minecraft, está cansado de
                  baixar mapas na internet e ter as mesmas construções igual a
                  todos os servidores? aqui na Waxy{" "}
                  <span className="roxos">Code</span> temos builders próprios
                  que vão fazer construções privadas para você.
                </p>
              </div>
              <div className="roxo">
                <div className="grid-item">
                  <h5>Designer (Logo, Banner, Thunbnail)</h5>
                  <p>
                    Deseja ter sua logo, banner ou thumbnail personalizado? com
                    o nosso nosso time de designers será possível garantir as
                    suas logos do seu servidor ou canal.
                  </p>
                </div>
              </div>

              <div className="grid-item">
                <h5>Bot para Discord</h5>
                <p>
                  Deseja ter seu proprio bot? aqui na Waxy{" "}
                  <span className="roxos">Code</span> programamos os seus bots
                  para seu servidor do Discord.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;

{
  /* <ul>
                    <li>
                        Desenvolvimento de Web Sites
                    </li>
                    <li>
                        Desenvolvimento de servidores de Minecraft
                    </li>
                    <li>
                        Desenvolvimento de servidores de Discord
                    </li>
                    <li>
                        Construções de Mapas para Minecraft
                    </li>
                    <li>
                        Bot para Discord
                    </li>
                    <li>
                        Designer (Logo, Banner, Thunbnail)
                    </li><br /> <br />
                    <p>Suporte para nossos serviços são 3 meses após a entrega do produto.</p>
                </ul> */
}
