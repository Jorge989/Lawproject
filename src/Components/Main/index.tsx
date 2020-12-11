import React,{useState} from 'react';
import {FiMenu} from 'react-icons/fi'
import ProfilePage from '../Profilepage';
 import { Container, Header,Lockicon1,Entrar,Entrar2 } from './styles';
 import Logo from '../../assets/logolaw.svg';
 const Main: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  return (
  
  <Container>
<Header>

 
<div className="cont">
  <img src={Logo} className="logo"/>
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
        <button><a href="/novocadastro">

        Teste Grátis
        </a>
        </button>
        </Entrar2>
     
</Header>
  
      
         <ProfilePage>

        </ProfilePage> 
 {/* <BottomMenu>

</BottomMenu>  */}
  {isShow && (
         <div className="Menu">
         <li> <a href="#" className="menu1">Entrar</a></li>
             <li> <a href="/trocarsenha" className="menu2">Faq</a></li>
             
             <li> <a href="#" className="menu3">Preços</a></li>
             
             <li> <a href="#" className="menu3">Contate-nos</a></li>
             
         </div>
        )}
  </Container> 
  
  )
}

export default Main;