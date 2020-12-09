import React, {useState,useEffect} from 'react';
import { useTransition, animated, config } from 'react-spring'
 import { Container,Banner,ProfileData,EditiButton,Video} from './style';
 import Lottie from 'react-lottie';
 import ReactPlayer from 'react-player'

 import Appblue from '../../assets/Ablue.svg';
  import Appwhite from '../../assets/Awhite.svg';
  import Apppurple from '../../assets/Adark.svg';
  import Appgreen from '../../assets/Agreen.svg';
 import * as animationData from  '../../assets/33558-hummer.json'
 import * as Gif from  '../../assets/33558-hummer.json'
 export interface ISignUpData {
  firstName: string;
  emailAddress: string;
}
const slides = [
  {id: 0, src: Appblue},
  {id: 1, src: Appwhite},
  {id: 2, src: Apppurple},
  {id: 3, src: Appgreen},
]
const Profilepage: React.FC = () => {


  const [index, set] = useState(0)
  const trasitions = useTransition(slides[index], item => item.id,{
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0},
    config: config.molasses
  })

  useEffect(()=> void setInterval(()=>  set(state=> (state +1) % 4), 5000), [])


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return  (

<Container>
{trasitions.map(({item,props,key})=>
 <animated.div
 key={key}
 className="bg"
 style={{...props, marginTop:'30px',marginLeft:'55px', position: 'absolute', height: '100%', width: '90%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundImage:  `url(${item.src})`}}>
</animated.div>
)}
 

 <ProfileData>
 
  

<h1 >Solução Completa para<br/>
Escritórios de Advocacia</h1>

{/* <img src={Appblue} className="appazul"/> */}
{/* <img src={Whiteapp} className="white"/>  */}

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

    <Banner />  



      </Container>

    );
}

export default Profilepage;