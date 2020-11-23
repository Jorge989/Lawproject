import React,{useState} from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Layout from './Pages/Layout';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import Routes from './routes'
import api from './services/api';
import ToastContainer from './Components/ToastContainer';
import AppProvider from './hooks';
import Home from './Pages/Home'
const App: React.FC = ()  =>{
 


  return (
    <BrowserRouter>
<AppProvider> 
<Routes/>
<GlobalStyles/>
</AppProvider>
</BrowserRouter>

  );
}

export default App;
