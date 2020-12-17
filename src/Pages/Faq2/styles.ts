import { CinzaIcon } from "../../styles/icons";
import styled, { css } from "styled-components";
import { Lock } from "../../styles/icons";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  z-index: 999;
  > svg {
    display: flex;
    position: fixed;
    width: 45%;
    margin-top: -38%;
    margin-left: -50%;
  }
`;
export const Header = styled.div`
  z-index: 2;
  position: fixed;

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

export const Lockicon1 = styled(Lock)``;
export const Entrar = styled.div`
  justify-content: space-between;

  align-items: center;
  width: 10%;

  display: flex;

  margin-left: 760px;
  top: 15px;

  > button {
    > a {
      color: #000000;
      text-decoration: none;
      &:hover {
        color: var(--bluebtn);
      }
    }
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
export const Blue = styled.div`
  .Menu {
 
    justify-content: center;
    border-radius: 10px;
    max-width: 90%;
    font-size: 18px;
    color: #0058ff;
    line-height: 1.4;

    z-index: 999;
    > h1 {

      max-width: 90%;
      justify-content: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  /* border-radius:5px;
 box-shadow: -4px 30px 30px  #7B7B7B; */

  width: 90%;
  height: 200px;

  margin-top: 80px;

  > svg {
    display: flex;
    position: fixed;
    width: 55%;
    margin-top: -70%;
    margin-left: 70%;
  }
  > div {
    > h1 {
      color: #3939FF;
      font-weight: 400;
      width: 100%;
      margin-left: 3%;
      margin-top: -1%;
    }

    margin-left: 19%;
    z-index: 999;
    margin-top: 2%;
    > button {
      z-index: 999;
      cursor: pointer;
      width: 10%;
      height: 0%;
      outline: 0;
      margin-left: 1%;
      margin-top: -2%;
    }
  }
`;

export const Draw = styled(CinzaIcon)`
  > svg {
    margin-left: 20%;
  }
  width: 20%;

  height: 20%;
`;
export const Draw2 = styled(CinzaIcon)`
  margin-left: -40%;
  width: 20%;

  height: 20%;
`;
