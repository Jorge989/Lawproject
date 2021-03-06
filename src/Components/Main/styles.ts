import styled from "styled-components";
import { Lock } from "../../styles/icons";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .Menu {
    border-radius: 2px;
    z-index: 999;
    background-color: #191919;
    width: 100%;
    height: 300px;
    margin-top: -80%;

    animation: drop 0.5s ease forwards;
    @keyframes drop {
      0% {
        transform: translateX(-110px);
      }
      70% {
        transform: translateX(20px);
      }
      100% {
        transform: translateX(0px);
      }
    }
    > li {
      margin-top: 5.5%;
      margin-left: 3%;
      border-bottom: 1px solid #fff;
      padding-bottom: 15px;
      list-style-type: none;
      text-decoration: none;
      > a {
        text-decoration: none;
        color: #fff;
        font-size: 27px;
      }
    }
  }
`;
export const Header = styled.div`
  z-index: 2;
  position: absolute;

  left: 0;
  height: 75px;
  box-shadow: 0px 0px 5px;
  color: #a4a4a4;
  top: 0;
  background: var(--white);

  display: flex;
  align-items: center;
  width: 100%;

 
  .menuhamburg {
    display: none;
    > button {
      cursor: pointer;
      outline: 0;
    }

    @media (max-width: 601px) {
      display: flex;

      justify-content: center;
      width: 20%;
      margin-left: -20%;
      margin-top: -2%;
    }
  }

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
  .logo {
    display: flex;
    justify-content: center;
    width: 25%;
    margin-top: -3%;
    margin-left: -100%;
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
    
    > a {
      text-decoration: none;

border-radius:5px;

      color: #000000;
      &:hover {
        color: var(--bluebtn);
      }
    }
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
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--footer);
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
`;
