import React from 'react';

import ProfilePage from '../Profilepage';
 import { Container, Header,Lockicon1,Entrar,BottomMenu,Entrar2 } from './styles';

const Main: React.FC = () => {
  return (
  
  <Container>
<Header>
<div className="cont">
    <li> <a href="/faq" className="cool-link">Faq</a></li>
    <li> <a href="#" className="cool-link1">Sobre</a></li>
    <li> <a href="#" className="cool-link2">Preços</a></li>
    <li> <a href="#" className="cool-link3">Contate-nos</a></li>

</div>
   
        <Lockicon1/>
        <Entrar> 
        <button><a href="/login">
        Entrar
        </a>
        </button>
        </Entrar>
        <Entrar2>
        <button>
        Teste Grátis
        </button>
        </Entrar2>
       
</Header>
  
         <ProfilePage>

        </ProfilePage> 
 {/* <BottomMenu>

</BottomMenu>  */}

  </Container> 
  
  )
}

export default Main;