import React from 'react';

import { Container,Draw,Draw2,Header,Lockicon1,Entrar,Entrar2,Blue } from './styles';

const Faq: React.FC = () => {
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
  
<Blue>
      <h1>FAq</h1>

<Draw/>

<Draw2/>
</Blue>
      </Container>
  )
}

export default Faq;