import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Logo from "../../assets/logolaw.svg";
import {
  Container,
  Draw,
  Draw2,
  Header,
  Lockicon1,
  Entrar,
  Entrar2,
  Blue,
} from "./styles";

const Faq2: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);
  const [isShow5, setIsShow5] = useState(false);
  const [isShow6, setIsShow6] = useState(false);
  return (
    <Container>
      <Header>
        <div className="cont">
        <button className="logo1">
            <a href="/home">
          <img src={Logo} className="logo" />
          </a>
          </button>
          <li>
            {" "}
            <a href="/faq" className="cool-link">
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

        <Lockicon1 />
        <Entrar>
          <button>
            <a href="/login">Entrar</a>
          </button>
        </Entrar>
        <Entrar2>
          <button>Teste Grátis</button>
        </Entrar2>
      </Header>

      <Blue>
      <div>
          <button onClick={() => setIsShow(!isShow)}>
          {isShow ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>O escritório atua em outras áreas, além da tributária?</h1>
           
          {isShow && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}
      

      <button onClick={() => setIsShow1(!isShow1)}>
          {isShow1 ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>O que devo fazer para contratar um advogado?
</h1>
           
          {isShow1 && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}
         <button onClick={() => setIsShow3(!isShow3)}>
          {isShow3 ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>Como é a cobrança de honorários?
</h1>
           
          {isShow3 && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}
          <button onClick={() => setIsShow2(!isShow2)}>
          {isShow2 ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>
Como faço para contatar o escritório? </h1>
           
          {isShow2 && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}

<button onClick={() => setIsShow4(!isShow4)}>
          {isShow4 ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>O escritório atua em outras áreas, além da tributária?</h1>
           
          {isShow4 && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}
           <button onClick={() => setIsShow5(!isShow5)}>
          {isShow5 ? 
            <FiMinus

              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }}

            />
:
               <FiPlus
              size={50}
              style={{
                color: "#0058FF",
                width: "30px",
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-5px",
              }} 
              
            />}


        
          </button>
          <h1>O que devo fazer para contratar um advogado</h1>
           
          {isShow5 && (
            <div className="Menu">
              <h1>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </h1>
            </div>
          )}
        </div>

        <Draw />
      </Blue>
      <Draw2 />
    </Container>
  );
};

export default Faq2;
