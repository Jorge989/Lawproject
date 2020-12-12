import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <body>
        <footer>
          <div className="footer-content">
            <h3>Inova Law</h3>
            <p>Lorem ipsum dolor site amet, consecter aidin s elit </p>
            <ul className="socials">
              <FiFacebook
                className="face"
                size={23}
                style={{ width: "30px", cursor: "pointer" }}
              />
              <FiTwitter
                className="twit"
                size={23}
                style={{ width: "30px", cursor: "pointer" }}
              />
              <FiLinkedin
                className="link"
                size={23}
                style={{ width: "30px", cursor: "pointer" }}
              />
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>copyright &copy;2020 codeOpacity. designed by</p>
          </div>
        </footer>
      </body>
    </Container>
  );
};

export default Footer;
