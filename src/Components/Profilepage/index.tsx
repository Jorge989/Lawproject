import React, {useState,useEffect} from 'react';

 import { Container,Banner,ProfileData,EditiButton,Video} from './style';
 import Lottie from 'react-lottie';
 import ReactPlayer from 'react-player'
 import * as animationData from  '../../assets/33558-hummer.json'
 import * as Gif from  '../../assets/33558-hummer.json'
 export interface ISignUpData {
  firstName: string;
  emailAddress: string;
}
const Profilepage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (

  <Container>
 
<ProfileData>
    <h1>Solução Completa para<br/>
Escritórios de Advocacia</h1>
<h2>
Estamos focados em facilitar a vida dos profissionais da lei.<br/>
Deseja ver na prática?
</h2>
     <EditiButton>
       <a href="/novocadastro">
       Testar Grátis
       </a>
    </EditiButton> 
      <strong>Porque nós</strong>
    <Video>
      <div>
    <ReactPlayer  url='youtube.com/watch?v=aJR7f45dBNs'/>
    </div>
    </Video>
</ProfileData>

    <Banner>


   
    </Banner>

      </Container>

    )
}

export default Profilepage;