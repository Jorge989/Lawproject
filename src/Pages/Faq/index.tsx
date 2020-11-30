import React from 'react';
import {FiPlus} from 'react-icons/fi'
import { Container,Draw,Draw2,Header,Lockicon1,Entrar,Entrar2,Blue } from './styles';

const Faq: React.FC = () => {
  return (
      <Container>
<Header>
<div className="cont">
    <li> <a href="/faq" className="cool-link">Faq</a></li>
    <li> <a href="#" className="cool-link1">Sobre</a></li>
    <li> <a href="#" className="cool-link2">Preços</a></li>
    <li> <a href="#" className="cool-link3">Contate-nos</a></li>

</div>
   
        <Lockicon1/>
        <Entrar> 
        <button><a href="/login">
        Entrar
        </a>
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
     <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>O escritório atua em outras áreas, além da tributária?</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>O escritório atua com ênfase na área tributária, mas atende</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>Seus clientes em outras áreas do direito, incluindo</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>Societário, civil e administrativo.</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>O que devo fazer para contratar um advogado?</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>Como é a cobrança de honorários?</h1>
       <button>
       <FiPlus size={50} style={{color: "#0058FF", width: "30px", position: "absolute",marginLeft: "-50px",marginTop:"-5px" }}  />
      </button>
       <h1>Como faço para contatar o escritório? </h1>
       
      </div>
<Draw/>
    


</Blue>
<Draw2/>
      </Container>
  )
}

export default Faq;