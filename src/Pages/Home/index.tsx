import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {BsFillQuestionOctagonFill } from 'react-icons/bs'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,Googleicon} from './styles';
import api from '../../services/api'



const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response:| GoogleLoginResponse |GoogleLoginResponseOffline): void => {
    if (!('profileObj' in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
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
        <button>
        Entrar
        </button>
        </Entrar>
        <Entrar2>
        <button>
        Teste Grátis
        </button>
        </Entrar2>
</Header>

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