import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import NovoCadastro from "./Pages/NovoCadastro";
import Cadastroinfo from "./Pages/Cadastroinfo";
import TrocarSenha from "./Pages/TrocarSenha";
import Homepage from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Faq from "./Pages/Faq";
import Esquecisenha from "./Pages/EsqueciSenha";
import Recuperarsenha from "./Pages/RecuperarSenha";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Layout} />
      <Route path="/login" exact component={Login} />
      <Route path="/novocadastro" exact component={NovoCadastro} />
      <Route path="/cadastroinfo" exact component={Cadastroinfo} />
      <Route path="/faq" exact component={Faq} />
      <Route path="/esquecisenha" exact component={Esquecisenha} />
      <Route
        path="/recuperarsenha/token=:token"
        exact
        component={Recuperarsenha}
      />
      <Route path="/home" exact component={Homepage} isPrivate />
      <Route path="/trocarsenha" exact component={TrocarSenha} isPrivate />
      {<Route path="/dashboard" exact component={Dashboard} isPrivate />}
    </BrowserRouter>
  );
};

export default Routes;
