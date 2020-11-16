import styled,{css} from 'styled-components';
import {Lock} from '../../styles/icons'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  

`;
export const Header = styled.div`
z-index:2;
  position: fixed;

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



export const Lockicon1 = styled(Lock)`

 


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
export const BottomMenu = styled.div`
position: fixed;
bottom: 0;
left: 0;
z-index: 2;
background: var(--footer);
width: 100%;
height: 200px;
display: flex;
justify-content: space-between;
padding: 8px min(46px, max(10vw, 10px));
`;


