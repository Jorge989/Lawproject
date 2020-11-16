import React,{useState,useEffect} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link, useHistory} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
 import api from '../../services/api'
const Cadastroinfo: React.FC = () => {
const [projects, setProjects] =useState([]);
const history =useHistory();

const [isShow, setIsShow] = useState(false);

function handleShow({ target }: React.ChangeEvent<HTMLSelectElement>) {
  if (target.value === 'escritorio') {
    return setIsShow(true)
  }
  setIsShow(false)
}



const handleHistory = () =>{
  history.push("")
}

    useEffect(() =>{
      api.get('/projects').then(response => {
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
  <h2>Nome completo</h2>
  <h2 className="Telefone">Telefone</h2>
<div>
  
  <input  placeholder="Nome completo"/>
  
  <input className="Telput" placeholder="(XX)"/>


 <h2 className="Escrit">Escritório</h2>
    <select onChange={handleShow}>
        <option value="" hidden></option>
        <option value="autonomo">Autônomo</option>
        <option value="escritorio">Escritorio</option>
      </select>

  <div className="show" style={{ visibility: isShow ? 'visible' : 'hidden' }}>
  <h2 className="nomeescrit">Nome do escritório </h2>
        <input className="nomE" type="text" placeholder="nome do escritório" />
        <h2 className="qtdfuncionarios">Qtd. funcionários</h2>
        <input className="Qtd" type="text" placeholder="Qtd. funcionários" />
      </div>
    </div>
   

 

    <Draw/>
<h5>Precisaremos das<br/> seguintes informações</h5>
<h1>Bem-Vindo !</h1>
<button> <a href="/home">Proxímo</a></button>














</Blue>


</Container>
  )
}

export default Cadastroinfo;