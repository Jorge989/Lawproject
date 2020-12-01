import React,{useState} from 'react';
import {FiMenu} from 'react-icons/fi'
import ProfilePage from '../Profilepage';
 import { Container, Header,Lockicon1,Entrar,Entrar2 } from './styles';
 const Main: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  return (
  
  <Container>
<Header>
<div className="cont">
    <li> <a href="/faq" className="cool-link">Faq</a></li>
    <li> <a href="#" className="cool-link1">Sobre</a></li>
    <li> <a href="#" className="cool-link2">Preços</a></li>
    <li> <a href="#" className="cool-link3">Contate-nos</a></li>

</div>
<div className="menuhamburg">
  <button onClick={() => setIsShow(!isShow)}>
<FiMenu size={35}/>
</button>
  

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
        {isShow && (
         <div className="Menu">
         <li> <a href="#" className="menu1">Trocar plano</a></li>
             <li> <a href="/trocarsenha" className="menu2">Trocar senha</a></li>
             
             <li> <a href="#" className="menu3">Pagamentos</a></li>
             
         </div>
        )}
 {/* <BottomMenu>

</BottomMenu>  */}
  </Container> 
  
  )
}

export default Main;