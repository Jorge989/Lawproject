import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {BsFillQuestionOctagonFill } from 'react-icons/bs'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,Googleicon} from './styles';
import api from '../../services/api'
import {useAuth} from '../../hooks/auth'
import Person from '../../assets/person.svg'


const Home: React.FC = () => {
  const { signOut} = useAuth();
  const [tipoperfil, setTipoperfil] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response:| GoogleLoginResponse |GoogleLoginResponseOffline): void => {
    if (!('profileObj' in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  function handleShow({ target }: React.ChangeEvent<HTMLSelectElement>) {
    if (target.value ) {

  
  
      return setIsShow(true)
    }

    setIsShow(false)
  }
  
  

  const responseGoogleFailed = (response: GoogleLoginResponse): void => {
  console.log(response);
      }
  return (
    <Container>
<Header>
<div className="cont">
    <li> <a href="#" className="cool-link">Faq</a></li>
    <li> <a href="#" className="cool-link1">Sobre</a></li>
    <li> <a href="#" className="cool-link2">Preços</a></li>
    <li> <a href="#" className="cool-link3">Contate-nos</a></li>

</div>
    
        <Entrar> 
        <button onClick={signOut}>
      Sair
        </button>
        </Entrar>
          <button onClick={() => setIsShow(!isShow)}>
        <img src={Person} alt="React Logo"/>
        </button>
        {/* <Entrar2>
        <button>
        Teste Grátis
        </button>
        </Entrar2> */}
</Header>
{isShow && (
 <div className="Menu">
 <li> <a href="#" className="menu1">Trocar plano</a></li>
     <li> <a href="/trocarsenha" className="menu2">Trocar senha</a></li>
     <li> <a href="#" className="menu3">Pagamentos</a></li>
 </div>
)}

<Blue>
<div>

<h1>Inova</h1>
<h3>Advocacia</h3>
 
 

  

  <button> <BsFillQuestionOctagonFill size={25} style={{color: "#4040FF", width: "30px", position: "absolute",marginLeft: "-35px",marginTop:"6px" }}/>FAQ<h4>(Perguntas frequantes)</h4></button>
<Draw/>
</div>
 









</Blue>

    </Container>


  )
}

export default Home;