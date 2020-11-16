import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Layout from './Pages/Layout';
import Routes from './routes'
import api from './services/api';
function App() {
  return (
<>
<Routes/>
<GlobalStyles/>
</>
  );
}

export default App;
