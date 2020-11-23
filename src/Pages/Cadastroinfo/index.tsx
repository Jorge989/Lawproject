import React,{useState,useEffect,createContext} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link, useHistory, useParams} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
 import api from '../../services/api'
import signIn from '../../services/auth'


interface HistoryUserData {
  senha: string
  email: string
}


const Cadastroinfo: React.FC = () => {
  
  
  
  
  
  
  
  const [isShow, setIsShow] = useState(false);
  const history = useHistory()
   const data = history.location.state as HistoryUserData

async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
 
  console.log(nomecompleto,telput,nomescritorio,qtd,tipoperfil)
 console.log(history.location.state)


  
// try {
//   const response = await api.post('usuarios',{
//    email: email,
//    nome: nomecompleto,
//    senha: senha,
//    perfil: tipoperfil,
//    //telefone: telput,
//   //  escritorio: nomescritorio,
//   //  qtd_funcionarios: qtd,
//  }, {
//   headers: {'content-type': 'application/json'}

//  });
//  ;
//  console.log(response.data);
//  console.log(response.data.token);
 
 
 
// } catch (error) {
//   console.log(error)
// }




// {
// 	"tipo_pag": "cartao_credito",
// 	"plano": "trial",
// 	"nome": "Escritorio 1",
// 	"nick_name": "Carlos",
// 	"email": "fernandoluiz_bit@hotmail.com",
// 	"telefone": "{% gerarNumeroTelefone false, true, 0, true, 0 %}",
// 	"quantidade_advogados":"12",
// 	"tipo_escritorio":"escritorio"
// }

//passar token e email 

  
try {
  const response = await api.post('escritorios',{
    nome: nomescritorio,
    tipo_pag: "cartao_credito",
    plano: "trial",
    nick_name: nomecompleto,
    email: data.email,
    telefone: telput,
    quantidade_advogados: qtd,
    tipo_escritorio:tipoperfil
 }, {
  headers: {'content-type': 'application/json','Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgxNiwiaWF0IjoxNjA1ODk1MTExLCJleHAiOjE2MDU5ODE1MTF9.UmeIVgUEOB30JKt6e8z9nB6xcGKXN12YLYnghYtuJD8'}

 });
 ;
 console.log(response.data);
 console.log(response.data.token);
 
 
 
} catch (error) {
  console.log(error)
}





 
};

function handleShow({ target }: React.ChangeEvent<HTMLSelectElement>) {
  if (target.value === "escritorio") {
setTipoperfil('escritorio');


    return setIsShow(true)
  }
  setTipoperfil('autonomo');
  setIsShow(false)
}





    
  

  const [name, setName] = useState("");
  const [nomecompleto, setNomecompleto] = useState("");
  const [telput, setTelput] = useState("");
  const [emailgoogle, setEmail] = useState("");
const [tipoperfil, setTipoperfil] = useState("");
  const [nomescritorio, setNomeescritorio] = useState("");
  const [qtd, setQtd] = useState("");
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
  
  <input  id="nomecompleto"
              value={nomecompleto} placeholder="Nome completo"
              onChange={(e) => setNomecompleto(e.target.value)}
              />
  
  <input  id="telput"
              value={telput}className="Telput" placeholder="(XX)"
              onChange={(e) => setTelput(e.target.value)}
              />


 <h2 className="Escrit">Escritório</h2>
    <select onChange={handleShow}>
        <option value="" hidden></option>
        <option id="autonomo" 
              value='autonomo'>Autônomo</option>
        <option id="escritorio"
              value='escritorio'>Escritorio</option>
      </select>

  <div className="show" style={{ visibility: isShow ? 'visible' : 'hidden' }}>
  <h2 className="nomeescrit">Nome do escritório </h2>
        <input  id="nomescritorio"
              value={nomescritorio} className="nomE" type="text" placeholder="nome do escritório"  onChange={(e) => setNomeescritorio(e.target.value)} />
        <h2 className="qtdfuncionarios">Qtd. funcionários</h2>
        <input id="qtd"
          onChange={(e) => setQtd(e.target.value)}    value={qtd} className="Qtd" type="text" placeholder="Qtd. funcionários" />
      </div>
    </div>
   

 

    <Draw/>
<h5>Precisaremos das<br/> seguintes informações</h5>
<h1>Bem-Vindo !</h1>

<button type="button" onClick={handleSubmit}> Proxímo</button>














</Blue>


</Container>
  )
}

export default Cadastroinfo;