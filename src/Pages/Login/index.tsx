import React,{useState,useCallback,useRef} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login'
import {Link} from 'react-router-dom'
import { Container,Header,Entrar,Entrar2 ,Blue, Draw,GoogleLogin,Googleicon} from './styles';
import api from '../../services/api'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {FiMail} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'
import  {Form} from '@unform/web'
import getValidationErrors from '../../utils/getValidationErros';
import * as Yup from 'yup';
import {FormHandles} from '@unform/core'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'
import {useToast} from '../../hooks/toast'
// async function handleSignIn(){
//   console.log('Logar');
// }



interface SigInFormData{
  email: string;
  senha: string;
}
const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
 const { signIn} = useAuth();
 const { addToast} = useToast();
 console.log(useAuth);

const  handleSubmit = useCallback(
  async(data: SigInFormData): Promise<void>  =>{
  try {
    formRef.current?.setErrors({}); 
    const schema = Yup.object().shape({

      email: Yup.string().required('E-mail obrigatório'),
      senha: Yup.string().required('Senha obrigatória'),
      

    })
await schema.validate(data,{
  abortEarly: false,
});

 await signIn({
  email: data.email,
  senha: data.senha,
});
} catch (err) {
  if (err instanceof Yup.ValidationError){
    console.log(err)
    const errors = getValidationErrors(err);
    formRef.current?.setErrors(errors);

  }

  addToast({
    type: 'error',
    title: 'Erro na autenticação',
    description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
  });
}
}, [signIn, addToast]);

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


      const eye = <FiEyeOff/>;
      const [passwordShown, setPasswordShown] = useState(false);
const [inputType, setInputType] = useState("password")
  const togglePasswordVisiblity = () => {
     setPasswordShown(passwordShown ===true? false : true);
     setInputType(inputType === "password" ? "text" : "password");
   };
 
 <i onClick={togglePasswordVisiblity}>{eye}</i>


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
<Form ref={formRef} onSubmit={handleSubmit}>
  
<div>
  <Link to="/">

  <FiArrowLeft size={50} style={{color: "#fff", width: "30px", position: "absolute",marginLeft: "25px",marginTop:"-60px" }}  />
  </Link>
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
placeholder="senha"
 />
 
  <Button type="submit" onClick={() => handleSubmit}>Entrar</Button>
  
</div>
<h1>Bem-Vindo !</h1>
<button onClick={togglePasswordVisiblity} type="button"  className="eye">

          {passwordShown ? (<FiEye/>)  : (<FiEyeOff/>) }
          </button>
<h3>Entrar</h3>

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
<button><a href="novocadastro">Cadastre-se</a></button>
</Form>
</Blue>

    </Container>


  )


}

export default Login;