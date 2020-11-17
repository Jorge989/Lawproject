import styled from 'styled-components';
import {DrawCadastro} from '../../styles/icons'
import {Go} from '../../styles/icons'
import  {GoogleLogin as CustomGoogleLogin} from 'react-google-login'
export const Container = styled.div`
display:flex;
justify-content:center;
   height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  z-index:999;
`;



export const Header = styled.div`
  z-index:2;
  position: fixed;
   background-color:green;
  left:0;
  height: 75px;
  box-shadow: 0px 0px 5px;
  color:#A4A4A4;
  top:0;
  background: var(--white);
  
  display: flex;
  align-items: center;
 width: 100%;

>div{
  
  position: absolute;
  display: flex;
  justify-content: center;
left: 20%;
   


transform: translateX(-0%) translateY(25%)
}
li {
  display: inline-block;
   

}
li a{
 text-decoration: none;
 color: #3A3A3A;
 font-size: 17px;
 padding: 0 40px;
 
 
}

.cool-link::after{
  content: '';
  display: block;
  width: 0;
  height: 1.5px;
  background: #1111FB;


}

li a:hover{
  color:  var(--bluebtn);
}
.cool-link:hover::after{

width: 46%;
margin-left: 38px;
transition: width .3s;


}
.cool-link1::after{
  content: '';
  display: block;
  width: 0;
  height: 1.5px;
  background: #1111FB;


}

li a:hover{
  color:  var(--bluebtn);
}
.cool-link1:hover::after{

width: 58%;
margin-left: 38px;
transition: width .3s;


}
.cool-link2::after{
  content: '';
  display: block;
  width: 0;
  height: 1.5px;
  background: #1111FB;


}

li a:hover{
  color:  var(--bluebtn);
}
.cool-link2:hover::after{

width: 60%;
margin-left: 38px;
transition: width .3s;


}
.cool-link3::after{
  content: '';
  display: block;
  width: 0;
  height: 1.5px;
  background: #1111FB;


}

li a:hover{
  color:  var(--bluebtn);
}
.cool-link3:hover::after{

width: 73%;
margin-left: 38px;
transition: width .3s;


}

 
  > svg {
    margin-left: 1050px;
   margin-top: -3px;
  color: var(--white);

}

  >button{
display: flex;
justify-content: center;

   
  }
  
  @media (max-width: 601px){
    display: flex;
 
 
    flex-direction: row;
margin-left: 5px;



    width: 120%;
    
    >button{
 display: none;
 cursor: pointer;

 &:hover{
          color: var(--bluebtn)
      }
    }
    > svg{
  display: none;
    }
    .cool-link3{
      display: none;
    }
    .cool-link2{
      display: none;
    }
    .cool-link1{
      display: none;
    }
    .cool-link{
      display: none;
    }
    }


`;

export const Entrar2 = styled.div`
justify-content: space-between;

align-items: center;
  width: 10%;
display: flex;
top:15px;
margin-left: 900px;


  >button{
    font-weight: 600;
   
    color: #000000;
      font-size: 19px;
      padding: 1px 1px 1px 1px;
display: flex;

     justify-content: space-between;

    width: 120px;
margin-left:-20px;
      outline:0;
      cursor: pointer;

      &:hover{
          color: var(--bluebtn)
      }
  }
  
  @media (max-width: 601px){
  
    display: flex;

    justify-content: center;
    width: 55%;
    margin-left: -0px;
>button{

  width: 40%;
    display: flex;
  margin-left: 160px;
  border: 3.9px solid black;
  border-radius: 2px;
  background-color: #EFEFEF;
    &:hover{
          color: var(--bluebtn)
      }
  padding: 2px 2px 5px 2px;
justify-content: center;

  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
          color: var(--bluebtn);
      }
}
  }
`;
export const Entrar = styled.div`
 justify-content: space-between;

align-items: center;
  width: 10%;

display: flex;

margin-left: 760px;
top: 15px;

  >button{

    font-weight: 600;
    font-size: 19px;
    color: #000000;
      
      padding: 1px 0px 0px 1px;
display: flex;


     justify-content: space-between;

    width: 60px;
margin-left:20px;
      outline:0;
      cursor: pointer;

      &:hover{
          color: var(--bluebtn)
      }
  }
  
  @media (max-width: 601px){
  
    display: flex;

    justify-content: center;
    width: 50%;
    margin-left: -310px;
>button{
  display: none;
}}

`;
export const Blue = styled.div`
 background-color:#4040FF;
 background-image: linear-gradient( to right,#4040FF  60%, #EBEBEB 60%, #EBEBEB );

 border-radius:5px;
 box-shadow: -4px 30px 30px  #7B7B7B;
margin-left:0%;
 
 width:70%;
 height:480px;

 margin-top:79px;

 >svg{
 
    width:30%;
    height:60%;
    margin-left:0px;
    margin-top:-138px;
   
  }
  h3{

    margin-left:73.5%;
  margin-top:-110px;
  font-size:27px;
  color:#2B2B2B
  }
  h4{
   
    margin-left:72%;
 
  margin-top:260px;
  font-weight:400;
  font-size:15.7px;
  color:#141414;
  }
  >h1{
   
width:40%;

color: #fff;
font-size: 60px;
font-weight:200;
margin-left: 15%;
margin-top: -55%;



}
>button{
  display:flex;
margin-top:5%;
  margin-left:73.4%;
  font-size:20px;
  cursor: pointer;
  >a{
      text-decoration: none;
      color:#101010;
      &:hover{
   color:#2828FC;
  }
    }


  height:10%;
  &:hover{
   color:#2828FC;
  }
}

.btngoogle{
  outline:0;
    width:2.5%;
    height:5.5%;
    margin-top:-15%;
    margin-left:75%;
   
  
  }
  
  div.error{
    position:fixed;
    margin-left:0%;
    font-size:17px;
    margin-top:20%;
    color:#FF0023;
  }
 >div{
  >button{
  
    outline:0;
 box-shadow: 0px 5px 5px #A4A4A4;
cursor:pointer;
 margin-top:10px;
 margin-left:62.5%;
 border-radius:5px;
 background-color:#0000FF;
 color:#fff;
 font-size:20px;
 font-weight:600;
 width:35%;
 height:9.5%;
 >a{
  text-decoration:none; 
   color:#fff;

 }
&:hover{
background-color:#2828FC;
}

}

>h2{

color: #141414;
  width:20%;
  height:40px;
  display:flex;
 

margin-left:62.7%;
font-size:17px;
margin-top:13px;
}

width:100%;
margin-top:10%;
height:100%;
 

 

 >input{
   background-color:#fff;
 padding-left:5px;


margin-top:-30px;
 width:35%;
 height:47px;
  border-radius:5px;
  margin-left: 62.5%;
outline:0;

 }


 }
 div.error{
    position:fixed;
    margin-left:51.5%;
    font-size:17px;
    margin-top:-6%;
    color:#FF0023;
  }

 @media (max-width: 601px){

  background-color:#4040FF;
 background-image: linear-gradient( to bottom ,#4040FF  57%, #EBEBEB 57%, #EBEBEB );

 border-radius:5px;
 box-shadow: -4px 30px 30px  #7B7B7B;

 
 width:90%;
 height:600px;

 margin-top:100px;
 
 >svg{
 display:none;
    width:15%;
    height:60%;
    margin-left:0px;
    margin-top:-200px;
   
  }
  h3{
display:none;
    margin-left:76%;
  margin-top:-110px;
  font-size:27px;
  color:#2B2B2B
  }
  h4{
   
    margin-left:20%;
 
  margin-top:335px;
  font-weight:400;
  font-size:22px;
  color:#141414;
  }
 
  >h1{
   
width:60%;

color: #fff;
font-size: 40px;
font-weight:200;
margin-left: 24%;
margin-top: -180%;



}
>button{
  display:flex;
margin-top:110px;
  margin-left:32%;
  font-size:25px;
  cursor: pointer;
  >a{
      text-decoration: none;
      color:#101010;
      &:hover{
   color:#2828FC;
  }

    }


  height:10%;
  &:hover{
   color:#2828FC;
  }
 
}

 >div{

  >button{
  
    outline:0;
 box-shadow: 0px 2px 5px #2D2D2D;
cursor:pointer;
 margin-top:90px;
 margin-left:7%;
 border-radius:5px;
 background-color:#0000FF;
 color:#fff;
 font-size:20px;
 font-weight:600;
 width:87%;
 height:9.5%;
&:hover{
background-color:#2828FC;
}

}

>h2{

color: #fff;
  width:20%;
  height:40px;
  display:flex;
 
font-weight:400;
margin-left:7%;
font-size:17px;
margin-top:13px;
}

width:100%;
margin-top:28%;
height:100%;
 

 

 >input{
   background-color:#fff;
 padding-left:5px;


margin-top:-30px;
width:87%;
 height:47px;
  border-radius:5px;
  margin-left: 7%;
outline:0;

 }


 }

 }
`;


export const GoogleLogin = styled(CustomGoogleLogin)`
background-color:red;
margin-left:200px;
margin-top:-30%;
>button{
  background-color:red;
  margin-top:-30%;
}
`;
export const Draw = styled(DrawCadastro)`


 

`;
export const Googleicon = styled(Go)`


 

`;






