import React,{useState,useEffect,createContext,useRef,useCallback} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link, useHistory, useParams} from 'react-router-dom'
import * as Yup from 'yup';
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
 import api from '../../services/api'
 import { useLocation } from 'react-router-dom';
import {useAuth} from '../../hooks/auth'
import  {Form} from '@unform/web'
import {FormHandles} from '@unform/core'
import {useToast} from '../../hooks/toast'

import getValidationErrors from '../../utils/getValidationErros';
interface LocationState {
  token: string;
}
interface HistoryUserData {
  senha: string
  email: string
 
}


const Cadastroinfo: React.FC = () => {
  
  
  
  


  const formRef =useRef<FormHandles> (null);
  const {addToast} = useToast();

  const location = useLocation<LocationState>();
  const {token} = location.state;

  const [isShow, setIsShow] = useState(false);
  const history = useHistory()

   const data = history.location.state as HistoryUserData
   const  handleSubmit2 = useCallback(
    async(data: object): Promise<void> => {
      try {
         formRef.current?.setErrors({}); 
         const schema = Yup.object().shape({
           nomecompleto: Yup.string().required('Nome obrigatório'),
           email: Yup.string().required('E-mail obrigatório'),
           senha: Yup.string().trim().matches(
             /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
             "senha deve conter pelo menos 8 caracteres, um número e um caractere especial"
           )
           .min(8, 'No minimo 8 dígitos'),
          
  
        })
         await schema.validate(data,{
           abortEarly: false,
         });
  
        
         const response = await api.post('usuarios', data);
         history.push('/cadastroinfo', response.data);
        addToast({
          type: 'sucess',
          title: 'Cadastro realizado com sucesso'
  
        })
      
   // }
         console.log(response.data);
        
      } catch (err) {
        console.log(err)
        if (err instanceof Yup.ValidationError){
          console.log(err)
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
  
        }
      
        addToast({
          type: 'error',
          title: 'Erro na cadastro',
           description: `Ocorreu um erro ao fazer cadastro, tente novamente.${err}`
         
        });
   
        
      }
    }, [addToast]);

    console.log(handleSubmit2)
      const testToast = (e:React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(testToast)
        console.log(addToast)
        console.log(useToast)
        addToast({
          type: 'sucess',
          title: 'Cadastro realizado com sucesso'
        })
      }
async function handleSubmit (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
 
  console.log(nomecompleto,telput,nomescritorio,qtd,tipoperfil)
 console.log(history.location.state)


  

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
  headers: {'content-type': 'application/json','Authorization': `Bearer ${token}`}

 });
 ;


//  console.log(response.data);

 
} catch (error) {
  console.log(data)
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

console.log(token)



    
  

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

  
<Form  ref={formRef} onSubmit={handleSubmit}>
<button type="button"  onClick={() => testToast}> Proxímo</button>
  <h2>Nome completo</h2>
  <h2 className="Telefone">Telefone</h2>

<div>

  <input  id="nomecompleto"
  name="nomecompleto"
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
   

 

<h5>Precisaremos das<br/> seguintes informações</h5>
<h1>Bem-Vindo !</h1>
    <Draw/>

<button type="button"  onClick={ handleSubmit}> Proxímo</button>













</Form>
</Blue>


</Container>
  )
}

export default Cadastroinfo;