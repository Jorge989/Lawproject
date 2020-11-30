import React from 'react';
import GlobalStyles from './styles/GlobalStyles'


import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes'

import AppProvider from './hooks';

const App: React.FC = ()  =>{
 


  return (
    <Router>
<AppProvider> 
<Routes/>
<GlobalStyles/>
</AppProvider>
</Router>

  );
}

export default App;
