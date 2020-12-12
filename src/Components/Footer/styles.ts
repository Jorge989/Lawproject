import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    margin-top: 50px;
    background: #fcfcfc;
  }

  footer {
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100%;
    font-family: "Roboto";
    padding-top: 40px;
    color: #fcfcfc;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .footer-content h3 {
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
  }

  .footer-content p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
  }

  .socials {
    .face {
      margin-left: 0px;
      color: #fff;
      &:hover {
        color: #0d68ff;
      }
    }
    .twit {
      margin-left: 20px;
      color: #fff;
      &:hover {
        color: #0d68ff;
      }
    }
    .link {
      margin-left: 20px;
      color: #fff;
      &:hover {
        color: #0d68ff;
      }
    }
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
  }
  .socials li {
  }
  .socials a {
    text-decoration: none;
    color: #fff;
  }
  .socials a i {
    font-size: 1.1rem;
    transition: color 0.4s ease;
  }
  .socials a :hover i {
    color: aqua;
  }

  .footer-bottom {
    background: #000;
    width: 100%;
    padding: 20px 0;
    text-align: center;
  }
  .footer-bottom p {
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
  }
  .footer-bottom span {
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 200;
  }
`;
