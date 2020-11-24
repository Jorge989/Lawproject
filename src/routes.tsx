import React from 'react';

import { BrowserRouter,Switch} from 'react-router-dom';
import Route from './Route'
import Layout from './Pages/Layout'
import Login from './Pages/Login'
import NovoCadastro from './Pages/NovoCadastro'
import Cadastroinfo from './Pages/Cadastroinfo'
import Homepage from './Pages/Home'
import Dashboard from './Pages/Dashboard'

const Routes: React.FC = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Layout} />
        <Route path="/login" exact component={Login} />s
        <Route path="/novocadastro" exact component={NovoCadastro} />
        <Route path="/cadastroinfo" exact component={Cadastroinfo} />
        <Route path="/home" exact component={Homepage} isPrivate/>
        <Route path="/dashboard" exact component={Dashboard} isPrivate/>
      </BrowserRouter>
    );
  };
  
export default Routes;