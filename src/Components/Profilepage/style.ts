import styled from 'styled-components';
import {Logo} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
 flex-direction: row;
  max-height: 100%;
 
  
    
  ::-webkit-scrollbar{
display: none;

  }
  > svg{
    display:flex;
margin-left: 200px;
width: 200%;
height: 100%;
height: min (33vw, 199px);
@media (max-width: 601px){
    display: flex;


    flex-direction: column;
margin-left: 30px;
/* background-color: #2e8; */

    width: 100%;
  }}
`;

export const Banner = styled(Logo)`
flex-shrink:0;

>strong{
  background: #2A2AFC;
        border-radius: 4px;
        z-index:2;
       font-weight: lighter;
        box-shadow: 0px 1px 6px 0px #353535;
        width: 145px;
        height: 38px;
        margin-top: 0px;
        margin-left: 200px;
}
`;
export const ProfileData = styled.div`
 
  display: flex;
  flex-direction: column;
  position: relative;
width: 40%;
  > h1{
 margin: 1.5vw;
    font-weight: bold;
    font-size: 60px;
    margin-top: 140px;
    width: 220%;
 
  }
  
  > h2{
      font-weight: normal;
      font-size: 25px;
      width: 200%;
      margin: 1.5vw;

   ;

  }
  >strong{
    margin-left: 22px;
    font-size: 28px;
    margin-top: 18%;
  }
  @media (max-width: 601px){
    display: flex;

 
    flex-direction: column;
margin-left: 5px;
/* background-color: #2e2e2e; */

    width: 30%;
>h1{
    font-size: 29px;


}
>h2{
    font-size: 18px;

}
>strong{
  font-size: 18px;
  margin-left: 0px;
  display: flex;
}
}
`;

export const EditiButton = styled.div`
display:flex;
cursor: pointer;
&:hover{
          background-color:#3939FF;
          
      } 
       justify-content:center;
       align-items:center;
     background: #2A2AFC;
        border-radius: 30px;
       font-weight: lighter;
        box-shadow: 0px 6px 10px 0px #0000FF;
        width: 145px;
        height: 50px;
        margin-top: 20px;
        margin-left: 30px;
        font-size: 19px;
        color: #fff;
        font-weight: 600;
>a{
  color: #fff;
  text-decoration: none;
  
}
        @media (max-width: 601px){
          display:none;
        }
     
 
`;
export const Video = styled.div`
width: 100%;
height: 10%;

display: flex;

margin-left: 20px;
>div{
  margin-top: 20px;
  width: 50%;
  height:10px;
  margin-left:2px;
  background-color: red;
}
>h1{
  width: 60%;
  font-size: 25px;
  margin-left:20px;


}
@media (max-width: 601px){
    display: flex;
    height: 10px;
    >div{
      display: flex;
    width: 300px;
 height:10px;
justify-content: center;
margin-left: 25px;
    }
}
`;




