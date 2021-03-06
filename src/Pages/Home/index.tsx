import React, { useState, useEffect } from "react";

// import {Date1} from '../../Components/Date'
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useHistory } from "react-router-dom";
import { Container, Header, Entrar, Blue, Draw } from "./styles";
import Logo from "../../assets/logolaw.svg";
import { useAuth } from "../../hooks/auth";
import Person from "../../assets/person.svg";
import Appstore from "../../assets/Appstore.svg";
import Playstore from "../../assets/Playstore.svg";

// interface ReturnDate {
//   time: string;
// }
const Home: React.FC = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setDate(new Date().toLocaleDateString());
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  const { signOut, user: any } = useAuth();

  const [tipoperfil, setTipoperfil] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [url, setUrl] = useState("");

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    if (!("profileObj" in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  function handleShow({ target }: React.ChangeEvent<HTMLSelectElement>) {
    if (target.value) {
      return setIsShow(true);
    }

    setIsShow(false);
  }

  const responseGoogleFailed = (response: GoogleLoginResponse): void => {};
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/5fc6bb0ba1d54c18d8ef660f/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container>
      <Header>
        <div className="cont">
          <img src={Logo} className="logo" />

          <li>
            {" "}
            <a href="/faq2" className="cool-link">
              Faq
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="cool-link1">
              Sobre
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="cool-link2">
              Preços
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="cool-link3">
              Contate-nos
            </a>
          </li>
        </div>

        <Entrar>
          <button onClick={signOut}>Sair</button>
          <button onClick={() => setIsShow(!isShow)}>
          <h1 className="menuzinho">Menu</h1>
          </button>
        </Entrar>

        {/* <Entrar2>
        <button>
        Teste Grátis
        </button>
      </Entrar2> */}
      </Header>
      {isShow && (
        <div className="Menu">
          <li>
            {" "}
            <a href="#" className="menu1">
              Trocar plano
            </a>
          </li>
          <li>
            {" "}
            <a href="/trocarsenha" className="menu2">
              Trocar senha
            </a>
          </li>

          <li>
            {" "}
            <a href="#" className="menu3">
              Pagamentos
            </a>
          </li>
        </div>
      )}

      <Blue>
        {/* <h1>Ola{user.name}</h1> */}

        <div>
          <h1>Inova</h1>
          <h3>Advocacia</h3>

          <button>
            <a href="/faq2">
              {/* {" "} */}
              <BsFillQuestionOctagonFill
                size={25}
                style={{
                  color: "#4040FF",
                  width: "30px",
                  position: "absolute",
                  marginLeft: "-35px",
                  marginTop: "6px",
                }}
              />
              FAQ<h4>(Perguntas frequantes)</h4>
            </a>
          </button>

          <Draw />
          <div className="date1">
            <h3>Data:</h3>
            <h1> {date}</h1>
          </div>
          <div className="date">
            <h3>Hora:</h3>
            <h1>{time}</h1>
          </div>
        </div>
        <h1 className="bemvindo">Bem-vindo</h1>
        <h3 className="configure">Configure seu aplicativo !</h3>
        <h3 className="configure1">
          Para começar a configurar o app, selecione o Painel no menu Para ver
          as próximas etapas.
        </h3>
        <div className="all">
        <div className="btn1">
        <a  className="playstore" href="https://play.google.com/store/apps/details?id=com.actionsys.inventario">
        {/* <button className="playstore"> */}
          <img className="logoplay" src={Playstore}></img>

          <h3 className="baixar">Baixar no</h3>
          <h3 className="google">Google Play</h3>
        {/* </button> */}
        </a>
        </div>
        <div className="btn2">
        <a  className="appstore" href="https://play.google.com/store/apps/details?id=com.dts.freefireth">
       
          <img className="logoapp" src={Appstore}></img>
          <h3 className="baixara">Baixar no</h3>
          <h3 className="googlea">App Store</h3>
          </a>
          </div>
          </div>
       
      </Blue>
    </Container>
  );
};

export default Home;
