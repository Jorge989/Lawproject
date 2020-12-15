import styled from "styled-components";
import { Drawinfo } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  z-index: 999;
`;

export const Header = styled.div`
  z-index: 2;
  position: fixed;
  background-color: green;
  left: 0;
  height: 75px;
  box-shadow: 0px 0px 5px;
  color: #a4a4a4;
  top: 0;
  background: var(--white);

  display: flex;
  align-items: center;
  width: 100%;

  > div {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 20%;

    transform: translateX(-0%) translateY(25%);
  }
  li {
    display: inline-block;
  }
  li a {
    text-decoration: none;
    color: #3a3a3a;
    font-size: 17px;
    padding: 0 40px;
  }

  .cool-link::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    background: #1111fb;
  }

  li a:hover {
    color: var(--bluebtn);
  }
  .cool-link:hover::after {
    width: 46%;
    margin-left: 38px;
    transition: width 0.3s;
  }
  .cool-link1::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    background: #1111fb;
  }

  li a:hover {
    color: var(--bluebtn);
  }
  .cool-link1:hover::after {
    width: 58%;
    margin-left: 38px;
    transition: width 0.3s;
  }
  .cool-link2::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    background: #1111fb;
  }

  li a:hover {
    color: var(--bluebtn);
  }
  .cool-link2:hover::after {
    width: 60%;
    margin-left: 38px;
    transition: width 0.3s;
  }
  .cool-link3::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    background: #1111fb;
  }

  li a:hover {
    color: var(--bluebtn);
  }
  .cool-link3:hover::after {
    width: 73%;
    margin-left: 38px;
    transition: width 0.3s;
  }
  .logo1{
 
 display: flex;
 justify-content: center;
 width: 25%;
 margin-top:-2%;
height:25%;
 margin-left: -100%;


}
  .logo {

    width: 90%;

  }
  > svg {
    margin-left: 1050px;
    margin-top: -3px;
    color: var(--white);
  }

  > button {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 601px) {
    display: flex;

    flex-direction: row;
    margin-left: 5px;

    width: 120%;

    > button {
      display: none;
      cursor: pointer;

      &:hover {
        color: var(--bluebtn);
      }
    }
    > svg {
      display: none;
    }
    .cool-link3 {
      display: none;
    }
    .cool-link2 {
      display: none;
    }
    .cool-link1 {
      display: none;
    }
    .cool-link {
      display: none;
    }
  }
`;

export const Entrar2 = styled.div`
  justify-content: space-between;

  align-items: center;
  width: 10%;
  display: flex;
  top: 15px;
  margin-left: 900px;

  > button {
    font-weight: 600;

    color: #000000;
    font-size: 19px;
    padding: 1px 1px 1px 1px;
    display: flex;

    justify-content: space-between;

    width: 120px;
    margin-left: -20px;
    outline: 0;
    cursor: pointer;

    &:hover {
      color: var(--bluebtn);
    }
  }

  @media (max-width: 601px) {
    display: flex;

    justify-content: center;
    width: 55%;
    margin-left: -0px;
    > button {
      width: 40%;
      display: flex;
      margin-left: 160px;
      border: 3.9px solid black;
      border-radius: 2px;
      background-color: #efefef;
      &:hover {
        color: var(--bluebtn);
      }
      padding: 2px 2px 5px 2px;
      justify-content: center;

      font-size: 11px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: var(--bluebtn);
      }
    }
  }
`;
export const Entrar = styled.div`
  justify-content: space-between;

  align-items: center;
  width: 10%;

  display: flex;

  margin-left: 760px;
  top: 15px;

  > button {
    font-weight: 600;
    font-size: 19px;
    color: #000000;

    padding: 1px 0px 0px 1px;
    display: flex;

    justify-content: space-between;

    width: 60px;
    margin-left: 20px;
    outline: 0;
    cursor: pointer;

    &:hover {
      color: var(--bluebtn);
    }
  }

  @media (max-width: 601px) {
    display: flex;

    justify-content: center;
    width: 50%;
    margin-left: -310px;
    > button {
      display: none;
    }
  }
`;
export const Blue = styled.div`
  background-color: #ebebeb;

  border-radius: 5px;
  box-shadow: -4px 30px 30px #7b7b7b;
  margin-left: 0%;

  width: 70%;
  height: 480px;

  margin-top: 100px;

  > Form {
    > button {
      z-index: 999;
      outline: 0;
      box-shadow: 0px 5px 5px #a4a4a4;
      cursor: pointer;
      margin-top: 13%;
      margin-left: 82%;

      border-radius: 5px;
      background-color: #0000ff;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      width: 12%;
      height: 50px;
      &:hover {
        background-color: #2828fc;
      }

      > a {
        color: #fff;
        text-decoration: none;
      }
    }
    > h5 {
      font-size: 30px;
      font-weight: 400;
      margin-top: -42%;
      margin-left: 5.2%;
    }
    > svg {
      z-index: 999;
      width: 30%;
      height: 240.5%;
      margin-left: 70%;
      margin-top: -12.5%;
    }

    > h1 {
      width: 40%;

      color: #171717;
      font-size: 60px;
      font-weight: 200;
      margin-left: 5%;
      margin-top: -16%;
    }

    > h2 {
      color: #141414;
      width: 20%;

      height: 40px;

      margin-left: 5.3%;

      font-size: 17px;
      margin-top: 17.5%;
    }
    > h2.Telefone {
      margin-left: 38.5%;
      margin-top: -4.2%;
    }

    .nomeescrit {
      display: flex;
      flex-direction: row;
      margin-top: 1%;
      width: 25%;
      font-size: 17px;
      margin-left: 20%;
    }
    .qtdfuncionarios {
      display: flex;
      flex-direction: row;
      margin-top: -9.5%;
      width: 20%;
      font-size: 17px;
      margin-left: 57%;
    }
    > div {
      > input {
        background-color: #fff;
        padding-left: 5px;

        margin-top: -32%;
        width: 85%;
        height: 47px;
        border-radius: 5px;
        margin-left: 10%;
        outline: 0;
      }
      display: flex;
      flex-direction: row;

      width: 100%;
      margin-top: 0%;
      height: 100%;

      > input {
        background-color: #fff;
        padding-left: 5px;
        z-index: 999;

        margin-top: -0.7%;
        width: 30%;
        height: 47px;
        border-radius: 5px;
        margin-left: 5.3%;
        outline: 0;
      }
      > select {
        outline: 0;
        padding-left: 5px;
        z-index: 999;
        width: 20%;
        margin-left: -8%;
        background-color: #fff;
        height: 47px;
        margin-top: 9.5%;
        border-radius: 5px;
      }
      > .show {
        z-index: 999;
        height: 35%;
        width: 90%;
        margin-top: 15%;
        margin-left: -38%;
      }
      .nomE {
        background-color: #fff;
        padding-left: 5px;

        margin-top: 1.3%;
        width: 25%;
        height: 47px;
        border-radius: 5px;
        margin-left: 57%;
        outline: 0;
      }
      .Qtd {
        background-color: #fff;
        padding-left: 5px;
        margin-top: 1.3%;

        margin-left: 20%;

        width: 33%;
        height: 47px;
        border-radius: 5px;

        outline: 0;
      }
      .Telput {
        margin-left: 3%;
        width: 23%;
      }
      .Escrit {
        height: 5%;
        font-size: 17px;
        margin-top: 6%;
        margin-left: -56%;
      }
    }
  }

  @media (max-width: 601px) {
    background-color: #ebebeb;

    border-radius: 5px;
    box-shadow: -4px 30px 30px #7b7b7b;

    width: 90%;
    height: 600px;

    margin-top: 100px;

    > svg {
      display: none;
      width: 30%;
      height: 60%;
      margin-left: 0px;
      margin-top: -52px;
    }
    h3 {
      display: none;
      margin-left: 76%;
      margin-top: -110px;
      font-size: 27px;
      color: #2b2b2b;
    }
    h4 {
      margin-left: 20%;

      margin-top: 335px;
      font-weight: 400;
      font-size: 22px;
      color: #141414;
    }

    > h1 {
      width: 60%;
      color: #171717;
      font-size: 40px;
      font-weight: 400;
      margin-left: 24%;
      margin-top: -226%;
    }
    > h2 {
      color: #000;
      width: 50%;
      height: 40px;
      display: flex;

      font-weight: bold;
      margin-left: 10%;
      font-size: 17px;
      margin-top: 40%;
    }
    > h2.Telefone {
      margin-left: 10.5%;
      margin-top: 20%;
    }

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: -0%;
      height: 100%;
      > button {
        outline: 0;
        box-shadow: 0px 2px 5px #2d2d2d;
        cursor: pointer;
        margin-top: 80%;
        margin-left: 6%;
        border-radius: 5px;

        color: #fff;
        font-size: 20px;
        font-weight: 600;
        width: 90%;
        height: 9.5%;
        &:hover {
          background-color: #2828fc;
        }
      }

      .Telput {
        margin-left: 10%;
        width: 85%;
        margin-top: 18%;
      }
    }
  }
`;

export const GoogleLogin = styled(CustomGoogleLogin)`
  background-color: red;
  margin-left: 200px;
  > button {
    background-color: red;
  }
`;
export const Draw = styled(Drawinfo)``;
export const Lockicon1 = styled(Lock)``;
export const Googleicon = styled(Go)``;
