import React,{useState,useEffect,useCallback, useRef} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import  {Form} from '@unform/web'
import {FormHandles} from '@unform/core'
import {FiEyeOff} from 'react-icons/fi'
import {FiEye} from 'react-icons/fi'

import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link, useHistory} from 'react-router-dom'
 import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
 import api from '../../services/api'
 import * as Yup from 'yup';

 import getValidationErrors from '../../utils/getValidationErros';
 import Input from '../../Components/Input';
 import Button from '../../Components/Button';
import {useToast} from '../../hooks/toast'




 const NovoCadastro: React.FC = () => {
   const [data, setData] = useState({ });
  const history = useHistory();
  const formRef =useRef<FormHandles> (null);
const {addToast} = useToast();

  const  handleSubmit = useCallback(
    async(data: object): Promise<void> => {

    try {
      formRef.current?.setErrors({}); 
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
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
      history.push('/cadastroinfo', (data))

      

 // }
      // console.log(response.data);
      
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



  const [name, setName] = useState('');
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const [errorE, setErrorE] = useState(['']);
  const [errorS, setErrorS] = useState(['']);
  const [passwordError, setPasswordError] = useState('')



  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  var regemail = /^\w+([-+.']\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/
  const eye = <FiEyeOff/>;
 
  



    


  // function handleSubmit2(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   e.preventDefault()
  

  // const handleSubmi2 = useCallback(async(data: object) =>{

  
  //   history.push('/cadastroinfo', { email, senha })
  //   try{
// const schema = Yup.object().shape({
//   name: Yup.string().required(),
//   email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
//   senha: Yup.string().min(8, "No mínimo 6 digitos"),
// })
// await schema.validate(data, {
//   abortEarly: false,
// });
// formRef.current?.setErrors({
//   email: 'Email obrigatório'
// })
//     } catch (err) {
// formRef.current?.setErrors({
//   email: 'Email obrigatório',
// });
//     }
//   }, []);


const [passwordShown, setPasswordShown] = useState(false);
const [inputType, setInputType] = useState("password")
  const togglePasswordVisiblity = () => {
    
     setPasswordShown(passwordShown ===true? false : true);
     setInputType(inputType === "password" ? "text" : "password");
   };
 
 <i onClick={togglePasswordVisiblity}>{eye}</i>
 
    useEffect(() =>{
      api.get('escritorios/listar').then(response => {
        console.log(response.data)
      })
    },[]);
  

    // useEffect(() => {
    //   if(senha && !reg.test(senha)){
    //     setPasswordError(messagePonto)
    //   } else{
    //     setPasswordError('')
    //   }
    // }, [senha])

    // useEffect(() => {
    //   if(email && !reg.test(email)){
    //     setPasswordError(messageArroba)
    //   } else{
    //     setPasswordError('')
    //   }
    // }, [email])

 
 
 
  
  const responseGoogle = (response:| GoogleLoginResponse |GoogleLoginResponseOffline): void => {
    if (!('profileObj' in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    console.log(response)
    console.log(response.profileObj)
  }

  return (

<Container> 
<Header>
<div className="cont">
          <li>
            {' '}
            <a href="#" className="cool-link">
              Faq
            </a>
          </li>
          <li>
            {' '}
            <a href="#" className="cool-link1">
              Sobre
            </a>
          </li>
          <li>
            {' '}
            <a href="#" className="cool-link2">
              Preços
            </a>
          </li>
          <li>
            {' '}
            <a href="#" className="cool-link3">
              Contate-nos
            </a>
          </li>
        </div>
    
        <Entrar>
          <button>Entrar</button>
        </Entrar>
        <Entrar2>
          <button>Teste Grátis</button>
        </Entrar2>
      </Header>

<Blue>
  <Form  ref={formRef} onSubmit={handleSubmit}>
<div>


  <Link to="/">
  <FiArrowLeft size={50} style={{color: "#fff", width: "30px", position: "absolute",marginLeft: "25px",marginTop:"-60px" }}  />
  </Link>

  <h2>Nome</h2>
  <Input

name="nome"
icon={FiUser}
type="text"
placeholder="nome"
 />

<h2>Email</h2>
  <Input

name="email"
icon={FiMail}
type="email"
placeholder="email"
 />
    <h2>Senha</h2>       
  <Input
name="senha"
icon={FiLock}
type={inputType}
  placeholder="Senha"
  />
 
             
         
 
 <Button type="submit" onClick={() => handleSubmit}>Cadastrar</Button>


</div>
<h1>Bem-Vindo !</h1>
<button onClick={togglePasswordVisiblity} type="button"  className="eye">

          {passwordShown ? (<FiEye/>)  : (<FiEyeOff/>) }
          </button>
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


</Form>
</Blue>


</Container>
  )
}


export default NovoCadastro;