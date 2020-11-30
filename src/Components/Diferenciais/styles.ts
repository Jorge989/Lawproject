import styled from 'styled-components';
import {Cinza} from '../../styles/icons';
export const Container = styled.div`
   height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;






 ;
  >svg{
  

 margin-left:0%;


  width: 23%;
height:50%;
  margin-top: 0%;
  }
  >strong{
    margin-left: 45%;
display:flex;
    font-size: 28px;
    margin-top: 13%;
    height:20%;
  
  }

 
  @media (max-width: 601px){
    display: flex;

  margin: 0 auto;
  margin-top:320px;
  width: 100%;



  justify-content: center;
  >svg{
  
    display: flex;
  flex-direction: column;
 margin-left:-320px;

  width: 25%;
height:50%;
  margin-top: 18%;
  }
  }
`;
export const Banner2 = styled(Cinza)`

`;
export const Cards = styled.div`
margin-top: -45%;
margin-left: 178px;
display:flex;
justify-content:space-between;
padding: 1px 1px 1px;

width:75%;
display:flex;
align-items:center;
@media (max-width: 601px){
    display:flex;
    margin-top:35%;

    height:20%;
    flex-direction:column;
    width:100%;
    margin-left:0px;
  >div{
    margin-top:10%;
  
    margin-left: -40%;
  }
  }
>div{
  background-color:#F6F6F6;
border-radius:10px;
  box-shadow: 0px 0px 5px;
  color:#A4A4A4;
 cursor:pointer;
  width:300px;
  height:300px;
  &:hover{
          background-color:#FBFBFB;
          img{
          
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

          }
      } 
      >img{
    
     
        width:123px;
     
margin-left: 32%;
margin-top: 21%;
animation: bounce 2s linear;
&:hover{
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@keyframes bounce{
        from,20%,53%,
        to{
animation-timing-function: cubic-bezier(0.215,0.61,0.355);
transform:translate(0,0,0)
        }
        40%,
        43%{
          animation-timing-function: cubic-bezier(0.755,0.05,0.855);
transform:translate3d(0,-30px,0) scaleY(1.1)

        }
        70%{

        }
      }
      }

  >h1{
 
    margin-top: 10%;
    font-size: 21px;
    width:270px;
    color: #1A1A1A;
    width:320px;
    
   
  }
  >p{
    display:flex;
margin-left: 5%;
width:300px;
margin-top: 5px;
color: #464646;
font-weight: 600;
font-size: 19px;
  }
 
}
`;

export const Cards2 = styled.div`
margin-top:-70%;
margin-left: 200px;
display:flex;
width:75%;
justify-content:space-between;

@media (max-width: 601px){
    display:flex;
    margin-top:274%;

 height:10%;
    flex-direction:column;
    width:10%;
    margin-left:-50px;
    >div{
    
    margin-top:-10%;

    margin-left: -780%;
  }
  }
>div{
  cursor:pointer;
  margin-top:100%;
  background-color:#F6F6F6;
border-radius:5px;
  box-shadow: 0px 0px 5px;
  color:#A4A4A4;
  width:300px;
  height:300px;
  &:hover{
          background-color:#FBFBFB;
          img{
          
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

          }

      } 
      >img{
    
     
    width:100px;
 
margin-left: 36%;
margin-top: 21%;
animation: bounce 2s linear;
&:hover{
animation-iteration-count: infinite;
-webkit-animation-iteration-count: infinite;
}

@keyframes bounce{
    from,20%,53%,
    to{
animation-timing-function: cubic-bezier(0.215,0.61,0.355);
transform:translate(0,0,0)
    }
    40%,
    43%{
      animation-timing-function: cubic-bezier(0.755,0.05,0.855);
transform:translate3d(0,-30px,0) scaleY(1.1)

    }
    70%{

    }
  }
  }

      >h1{
 
 margin-top: 8%;
 font-size: 21px;
 width:270px;
 color: #1A1A1A;
 width:320px;
 

}
>p{
 display:flex;
margin-left: 5%;
width:300px;
margin-top: 5px;
color: #464646;
font-weight: 600;
font-size: 19px;
}
 
}
`;






