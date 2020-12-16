import React, {
  useState,
  useRef,
  useCallback,
  useContext,
  useEffect,
} from "react";
import {} from "react-icons/fi";

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Container,
  Header,
  Entrar,
  Entrar2,
  Blue,
  Lockicon1,
  Draw,
} from "./styles";
import api from "../../services/api";
import { useLocation } from "react-router-dom";
import { AuthContext, useAuth } from "../../hooks/auth";
import { Form } from "@unform/web";
import Logo from "../../assets/logolaw.svg";
import { FormHandles } from "@unform/core";
import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErros";
interface LocationState {
  token: string;
}

interface Usuario {
  date_insert: string;
  email: string;
  id_usuario: number;
  ip_insert: string;
  nome: string;
  status_usuario: string;
  time_insert: string;
  tipo_conta: string;
  user_insert: string;
}
interface LoginDTO {
  senha: string;
  email: string;
  nome: string;
}

interface UserData {
  token: string;
  usuario: Usuario;
}

interface PushedHistory {
  loginDTO: LoginDTO;
  userData: UserData;
}

interface SigInFormData {
  email: string;
  senha: string;
}
const Cadastroinfo: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [isShow, setIsShow] = useState(false);
  const history = useHistory();

  const data = history.location.state as PushedHistory;
  useEffect(() => {
    const {loginDTO,  userData} = history.location.state as PushedHistory;
    setNomecompleto(loginDTO.nome)
    console.log(data);
  });

  const handleSubmit2 = useCallback(
    async (data: object): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nomecompleto: Yup.string().required("Nome obrigatório"),
          email: Yup.string().required("E-mail obrigatório"),
          senha: Yup.string()
            .trim()
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
              "senha deve conter pelo menos 8 caracteres, um número e um caractere especial"
            )
            .min(8, "No minimo 8 dígitos"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post("usuarios", data);
        history.push("/cadastroinfo", response.data);
        addToast({
          type: "sucess",
          title: "Cadastro realizado com sucesso",
        });

        // }
        console.log(response.data);
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na cadastro",
          description: `Ocorreu um erro ao fazer cadastro, tente novamente.${err}`,
        });
      }
    },
    [addToast]
  );

  const testToast = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(testToast);
    console.log(addToast);
    console.log(useToast);
    addToast({
      type: "sucess",
      title: "Cadastro realizado com sucesso",
    });
  };
  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    console.log(nomecompleto, telput, nomescritorio, qtd, tipoperfil);
    console.log(history.location.state);

    console.log(data.loginDTO.email);

    if (nomecompleto !== "" && telput !== "" && tipoperfil !== "") {
      try {
        const response = await api.post(
          "escritorios",
          {
            nome: qtd !== "" ? qtd : 0,
            tipo_pag: "cartao_credito",
            plano: "trial",
            nick_name: nomecompleto,
            email: data.loginDTO.email,
            telefone: telput,

            quantidade_advogados:  nomescritorio !== "" ? nomescritorio : nomecompleto ,
            tipo_escritorio: tipoperfil,
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${data.userData.token}`,
            },
          }
        );
        history.push("/cadastroinfo", {
          loginDTO: data,
          userData: response.data,
        });
        history.push("/home", {
          loginDTO: data,
          userData: response.data,
        });
        await signIn({
          email: data.loginDTO.email,
          senha: data.loginDTO.senha,
        });

        await api.put(
          `usuarios/${data.userData.usuario.id_usuario}`,
          {
            nome: data.userData.usuario.nome,
            email: data.userData.usuario.email,
            perfil: tipoperfil === "autonomo" ? "autonomo" : "admin",
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${data.userData.token}`,
            },
          }
        );

        console.log(response.data);

        addToast({
          type: "sucess",
          title: "Cadastro realizado com sucesso",
        });
        history.push("/home");

        //  console.log(response.data);
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro na cadastro",
          description: `Ocorreu um erro ao fazer cadastro, tente novamente.${error}`,
        });

        console.log(data);
      }
    } else {
      addToast({
        type: "error",
        title: "Erro na cadastro",
        description: `Preencha todos os campos`,
      });
    }
  }

  function handleShow({ target }: React.ChangeEvent<HTMLSelectElement>) {
    if (target.value === "escritorio") {
      setTipoperfil("escritorio");

      return setIsShow(true);
    }
    setTipoperfil("autonomo");
    setIsShow(false);
  }

  const [name, setName] = useState("");
  const [nomecompleto, setNomecompleto] = useState("");
  const [telput, setTelput] = useState("");
  const [emailgoogle, setEmail] = useState("");
  const [tipoperfil, setTipoperfil] = useState("");
  const [nomescritorio, setNomeescritorio] = useState("");
  const [qtd, setQtd] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    if (!("profileObj" in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  console.log(tipoperfil);



  return (
    <Container>
      <Header>
        <div className="cont">
        <button className="logo1">
            <a href="/">
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

        <Entrar>
        <Lockicon1 />
          <button>Entrar</button>
        </Entrar>
        <Entrar2>
          <button>Teste Grátis</button>
        </Entrar2>
      </Header>
      {/* <button type="button"  onClick={testToast}> Proxímo</button> */}

      <Blue>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Nome completo</h2>
          <h2 className="Telefone">Telefone</h2>

          <div>
            <input
              id="nomecompleto"
              name="nomecompleto"
              value={nomecompleto}
              placeholder="Nome completo"
              onChange={(e) => setNomecompleto(e.target.value)}
            />

            <input
              id="telput"
              value={telput}
              className="Telput"
              placeholder="(XX)"
              onChange={(e) => setTelput(e.target.value)}
            />

            <h2 className="Escrit">Escritório</h2>
            <select onChange={handleShow}>
              <option value="" hidden></option>
              <option id="autonomo" value="autonomo">
                Autônomo
              </option>
              <option id="escritorio" value="escritorio">
                Escritorio
              </option>
            </select>

            <div
              className="show"
              style={{ visibility: isShow ? "visible" : "hidden" }}
            >
              <h2 className="nomeescrit">Nome do escritório </h2>
              <input
                id="nomescritorio"
                value={nomescritorio}
                className="nomE"
                type="text"
                placeholder="Qtd. funcionários"
                onChange={(e) => setNomeescritorio(e.target.value)}
              />
              <h2 className="qtdfuncionarios">Qtd. funcionários</h2>
              <input
                id="qtd"
                onChange={(e) => setQtd(e.target.value)}
                value={qtd}
                className="Qtd"
                type="text"
                placeholder="Nome de escritório"
              />
            </div>
          </div>

          <h5>
            Precisaremos das
            <br /> seguintes informações
          </h5>
          {/* <h1>Bem-Vindo !</h1> */}
          <Draw />

          <button type="button" onClick={handleSubmit}>
            {" "}
            Próximo
          </button>
        </Form>
      </Blue>
    </Container>
  );
};

export default Cadastroinfo;
