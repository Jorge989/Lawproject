import React from "react";
import Ag from "../../assets/ag.svg";
import Info from "../../assets/info.svg";
import Eye from "../../assets/eye.svg";
import Tec from "../../assets/tec.svg";
import Seting from "../../assets/settings.svg";
import Rocket from "../../assets/rocket.svg";
import { Container, Banner2, Cards, Cards2 } from "./styles";

const Diferenciais: React.FC = () => {
  return (
    <Container>
      <strong>Diferenciais</strong>

      <Banner2></Banner2>
      <Cards>
        <div>
          <img src={Ag} />
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fidelização dos Clientes</h1>
          <p>
            &nbsp;&nbsp;&nbsp;Tenha clientes fieis através
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do seu aplicativo móvel
          </p>
        </div>
        <div>
          <img src={Info} />
          <h1>&nbsp;&nbsp;&nbsp;Tenha seu aplicativo móvel</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;O aplicativo permite que o <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cliente tenha acesso às
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;informações do escritório
          </p>
        </div>
        <div>
          <img src={Eye} />
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visibilidade da marca
          </h1>
          <p>
            A marca do seu escritório ficará sempre visivel quando o cliente
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;acessar
            o app
          </p>
        </div>
      </Cards>
      <Cards2>
        <div>
          <img src={Tec} />
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Modernidade
          </h1>
          <p>
            A marca do seu escritório ficará sempre visível quando o cliente
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;acessa
            o app.
          </p>
        </div>
        <div>
          <img src={Seting} />
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manutenção
            de <br />
            &nbsp;&nbsp;&nbsp;relacionamento com cliente
          </h1>
          <p>
            fácil organização e comunicação
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;com
            os clientes
          </p>
        </div>
        <div>
          <img src={Rocket} />
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visibilidade da marca
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;Agora escritórios pequenos podem se destacar no
            mercado &nbsp;&nbsp;através do uso de tecnologia
          </p>
        </div>
      </Cards2>
    </Container>
  );
};

export default Diferenciais;
