import styled, { keyframes } from "styled-components";
//************************* */
// Fotter - Pasta Fotter   //
//************************ */

export const ContainerRedeSociais = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
    align-items: center;
    background-color: #f5f5f5;
    bottom: 1px;
    display: flex;
    height: 37px;
    justify-content: space-between;
    left: 0px;
    margin: 0 10px;
    margin-bottom: 0px;
    position: fixed;
    right: 0px;
    width: 100%;
  }
  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
    align-items: center;
    bottom: 1px;
    display: flex;
    height: 35px;
    justify-content: space-around;
    margin-bottom: 1px;
    position: fixed;
    width: 100%;
  }

  /* 3 Intervalo de configuração WDTH */
@media screen and (max-width: 700px) and (min-width: 450px) {
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
bottom: 1px;
position: fixed;
width: 100%;
img{
width: 90px;
height: 28px;
}
}
  /* 3.1 Intervalo de configuração WDTH */
  @media screen and (max-width: 449px) and (min-width: 280px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        bottom: 1px;
        position: fixed;
        width: 100%;
        
        img{
              
        width: 80px;
        height: 28px;
          
        }
   
  }


  /* 4º Intervalo de configuração WDTH */
  @media screen and (max-width: 279px) and (min-width: 1px) {
      
      display: none;
 
}

/* 1.9 Dispositivo iPhone5/SE Horizontal */
@media screen and (width: 320px) and (height: 568px) {
  /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
  img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]{
    display: none;
}
}

  /*2.0 Dispositivo iPhone 6/7/8 Horizontal */
  @media screen and (width: 375px) and (height: 667px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
  img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]{
    display: none;
}
  }

  /* 4.0 Dispositivo iPhone X Horizontal */
  @media screen and (width: 375px) and (height: 812px) {
/* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]{
    display: none;

  }

  }
   /* 8.0 Galaxy Fold Vertical */
   @media screen and (width: 653px) and (height: 280px) {
     display: none;
   }

   /* 9.0 Nest Hub */
   @media screen and (width: 1024px) and (height: 600px) {
     display: none;
   }

      /*10 .0 Nest Hub Max */
      @media screen and (width: 1280px) and (height: 800px) {
     display: none;
   }

   /* 1.1 Intervalo de configuração Horizontal */
   @media screen and (max-height: 894px) and (min-height: 1px) {
    display: none;
   }

`;
export const SpanMensagemInformativa =styled.span `
animation: ${(props) => props.BorderKeyFumcaInformativa} 12s ease infinite;
align-items: center;
background-color: #24292F;
border-radius: 15px;
color:#999;
display: flex;
font-size: 30px;
font-weight: 500;
height: 5vh;
justify-content: center;
margin-bottom: 8px;
margin-right: 28px;
margin-left: 40px;
/* border: 2px solid yellow; */
width: 100%;
`;

export const BorderKeyFumcaInformativa = keyframes`
  0%{
    border-radius: 15px;
    background: #24292F;
    color:#999;
    box-shadow:0 0 30px #ffff52;

  }

  10%{
    border-radius: 20px;
    background: #24292F;
    color:#999;
    box-shadow:0 0 40px #ffff52;
  }


  20%{
    background: #24292F;
    border-radius: 25px;
    color:#999;
    box-shadow:0 0 50px #ffff52;
  }


  30%{
    background: #24292F;
    border-radius: 45px;
    color:#999;
    box-shadow:0 0 60px #ffff52;
  }

  40%{
    background: #24292F;
    border-radius: 45px;
    color:#999;
    box-shadow:0 0 70px #ffff52;
  }


  50%{
    background: #24292F;
    border-radius: 45px;
    color:#999;
    box-shadow:0 0 80px #ffff52;
  }

  60%{
    background: #24292F;
    border-radius: 40px;
    color:#999;
    box-shadow:0 0 90px #ffff52;
  }


  70%{
    background: #24292F;
    border-radius: 35px;
    color:#999;
    box-shadow:0 0 100px #ffff52;
  }


  80%{
    background: #24292F;
    border-radius: 25px;
    color:#999;
    box-shadow:0 0 110px #ffff52;
  }


  90%{
    background: #24292F;
    border-radius: 20px;
    color:#999;
    box-shadow:0 0 120px #ffff52;
  }

  100%{
    background: #24292F;
    border-radius: 10px;
    color:#999;
    box-shadow:0 0 19px #333;
  }

`
