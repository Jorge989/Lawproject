import React,{useState,useEffect} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link, useHistory} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
 import api from '../../services/api'

const NovoCadastro: React.FC = () => {
const [projects, setProjects] =useState([]);
const history =useHistory();
console.log(history);


const handleHistory = () =>{
  history.push("")
}
    useEffect(() =>{
      api.get('escritorios/listar').then(response => {
        console.log(response.data)
      })
    },[]);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response:| GoogleLoginResponse |GoogleLoginResponseOffline): void => {
    if (!('profileObj' in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
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
  <script defer src="script.js"></script>
<div id="error"></div>
<form action="novocadastro" method="POST">
  <Link to="/">
  <FiArrowLeft size={50} style={{color: "#fff", width: "30px", position: "absolute",marginLeft: "25px",marginTop:"-75px" }}  />
  </Link>
  <h2>Email</h2>
  <input id="email"  placeholder="E-mail"/>
  <h2>Senha</h2>
  
  <input id="senha"   placeholder="Senha"/>
  <button type="submit"><a href="/cadastroinfo">Cadastrar</a>
    </button>
    </form>
</div>
 
<h1>Bem-Vindo !</h1>
<h3>Cadastrar</h3>

<h4>ou acesse rapidamente!</h4>




<Draw/>



<GoogleLogin 
    clientId="211368015593-fucd3no6bv208m9iuf809l9f72ulmejr.apps.googleusercontent.com"
    render={renderProps => (
      <button  className="btngoogle"  onClick={renderProps.onClick} disabled={renderProps.disabled}><Googleicon/></button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    
    />
<button><a href="login">Já possui login?</a></button>
</Blue>


</Container>
  )
}

export default NovoCadastro;