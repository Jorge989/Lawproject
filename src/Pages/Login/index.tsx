//2846445278933444
import React, { useState, useCallback, useRef, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../../assets/logolaw.svg";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Entrar,
  Entrar2,
  Lockicon1,
  Blue,
  Draw,
  GoogleLogin,
  Googleicon,
  Facebokcion,
} from "./styles";
import FacebookLogin from "react-facebook-login";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import getValidationErrors from "../../utils/getValidationErros";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
// async function handleSignIn(){
//   console.log('Logar');
// }

interface SigInFormData {
  email: string;
  senha: string;
}
const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, setAuthData } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SigInFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required("E-mail obrigatório"),
          senha: Yup.string().required("Senha obrigatória"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          senha: data.senha,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login, cheque as credenciais.",
        });
      }
    },
    [signIn, addToast]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<void> => {
    if (!("profileObj" in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    const { data } = await api.post("/autenticar", {
      email: response.profileObj.email,
    });
    setAuthData({ user: data.usuario, token: data.token });

    console.log(data);
  };
  const responseGoogleFailed = (response: GoogleLoginResponse): void => {
    console.log(response);
  };

  const responseFacebook = (response: any) => {
    console.log(response);
  };

  const componetClicked = (data: any) => {
    console.warn(data);
  };

  const eye = <FiEyeOff />;
  const [passwordShown, setPasswordShown] = useState(false);
  const [inputType, setInputType] = useState("password");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown === true ? false : true);
    setInputType(inputType === "password" ? "text" : "password");
  };

  <i onClick={togglePasswordVisiblity}>{eye}</i>;

  return (
    <Container>
      <Header>
        <div className="cont">
          <img src={Logo} className="logo" />
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
          <button>Entrar</button>
        </Entrar>
        <Entrar2>
          <button>Teste Grátis</button>
        </Entrar2>
      </Header>

      <Blue>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <Link to="/">
              <FiArrowLeft
                size={50}
                style={{
                  color: "#fff",
                  width: "30px",
                  position: "absolute",
                  marginLeft: "25px",
                  marginTop: "-60px",
                }}
              />
            </Link>
            <h2>Email</h2>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="email"
            />
            <h2>Senha</h2>

            <Input
              name="senha"
              icon={FiLock}
              type={inputType}
              placeholder="senha"
            />

            <Button type="submit" onClick={() => handleSubmit}>
              Entrar
            </Button>
          </div>
          <h1>Bem-Vindo !</h1>

          <h3>Entrar</h3>

          <h4>ou acesse rapidamente!</h4>

          <Draw />

          <GoogleLogin
            clientId="211368015593-fucd3no6bv208m9iuf809l9f72ulmejr.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btngoogle"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Googleicon />
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <button>
            <a href="novocadastro">Cadastre-se</a>
          </button>
          <button className="Esqueceu">
            <a href="esquecisenha">Esqueceu sua senha?</a>
          </button>
        </Form>

        <FacebookLogin
          appId="2846445278933444"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componetClicked}
          callback={responseFacebook}
          icon={<Facebokcion />}
          textButton=""
          cssClass="facebook"
        />
      </Blue>
      <button onClick={togglePasswordVisiblity} type="button" className="eye">
        {passwordShown ? <FiEye size={21} /> : <FiEyeOff size={21} />}
      </button>
    </Container>
  );
};

export default Login;
