import styled from "styled-components";


export const ContainerMain = styled.section`
  
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
  align-items: center;
  display: flex;
  height: 69px;
  justify-content: center;
  width: 100%;
  }

  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
  align-items: center;
  display: flex;
  height: 69px;
  justify-content: center;
  width: 100%;
  }

   /* 3º Intervalo de configuração WDTH */
    @media screen and (max-width: 700px) and (min-width: 280px) {
  align-items: center;
  display: flex;
  height: 69px;
  justify-content: center;
  width: 100%;
  }


`;

export const ContainerNavBar = styled.section`
/* 1º Intervalo de configuração WDTH */
 @media screen and (max-width: 2300px) and (min-width: 1000px) {
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 100%;
 }
/* 2º Intervalo de configuração WDTH */
@media screen and (max-width: 999px) and (min-width: 701px) {
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
  width: 100%;
 }

 /* 3º Intervalo de configuração WDTH */
@media screen and (max-width: 700px) and (min-width: 280px) {
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
  width: 100%;
 }


`;

export const ContainerLista = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1540px) {
  align-items: center;
  background-color: #24292f;
  color:#F5F5F5 ;
  font-size: 28px;
  display: flex;
  justify-content: space-around;
  width: 48%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
    p:hover{
        background-color:#F5F5F5;
        color:#F34F29;
        display: flex;
        height: 15px;
        padding: 13px 13px 13px 13px;
        justify-content: center;
        align-items: center;
        transform: scale(1.05);
        transition: ease 0.3s;
      }
    }
/* 2º Intervalo de configuração WDTH */
@media screen and (max-width: 1539px) and (min-width: 1000px) {
  align-items: center;
  background-color: #0077B5;
  color:#F5F5F5 ;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  width: 28%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
    p:hover{
        background-color:#F5F5F5;
        color:#F34F29;
        display: flex;
        height: 15px;
        padding: 13px 13px 13px 13px;
        justify-content: center;
        align-items: center;
        transform: scale(1.05);
        transition: ease 0.3s;
      }

}
/* 3º Intervalo de configuração WDTH */
@media screen and (max-width: 999px) and (min-width: 701px) {
  align-items: center;
  background-color: #100000;
  color:#F5F5F5 ;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
  margin-bottom: 5px;
    p:hover{
        background-color:#F5F5F5;
        color:#F34F29;
        display: flex;
        height: 15px;
        padding: 13px 13px 13px 13px;
        justify-content: center;
        align-items: center;
        transform: scale(1.05);
        transition: ease 0.3s;
      }

}
/* 4º Intervalo de configuração WDTH */
@media screen and (max-width: 700px) and (min-width: 280px) {
  align-items: center;
  background-color: #E4405F;
  color:#F5F5F5 ;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
    p:hover{
        background-color:#F5F5F5;
        color:#F34F29;
        display: flex;
        height: 15px;
        /* padding: 13px 13px 13px 13px; */
        justify-content: center;
        align-items: center;
        transform: scale(1.05);
        transition: ease 0.3s;
      }

}
/* 5º Intervalo de configuração WDTH */
@media screen and (max-width: 279px) and (min-width: 1px) {
  align-items: center;
  background-color: #E4405F;
  color:#F5F5F5 ;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
    p:hover{
        background-color:#F5F5F5;
        color:#F34F29;
        display: flex;
        flex-direction: column;
        height: 15px;
        padding: 13px 13px 13px 13px;
        justify-content: center;
        align-items: center;
        transform: scale(1.05);
        transition: ease 0.3s;
      }

}

`;

export const ContainerLogo = styled.section`

/* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1150px) {
  align-items: center;
  background-color: #f5f5f5;
  color: #777;
  display: flex;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  /* border: 1px solid black; */
  img {
    width: 50px;
    height: 50px;
  }
  }


/* 2º Intervalo de configuração WDTH */
@media screen and (max-width: 1149px) and (min-width: 1000px) {
  align-items: center;
  background-color: #f5f5f5;
  color: #777;
  display: flex;
  justify-content: space-around;
  height: 70px;
  width: 90%;
  /* border: 1px solid black; */
  img {
    width: 50px;
    height: 50px;
  }
  }

/* 3º Intervalo de configuração WDTH */
@media screen and (max-width: 999px) and (min-width: 600px) {
  align-items: center;
  background-color: #f5f5f5;
  color: #777;
  display: flex;
  height: 70px;
  justify-content: space-around;
  margin-top: 15px;
  width: 100%;
  
  img {
    width: 48px;
    height: 48px;
  }
  }


/* 4º Intervalo de configuração WDTH */
@media screen and (max-width: 599px) and (min-width: 280px) {
  display: none;
  }


/* 4º Intervalo de configuração WDTH */
@media screen and (max-width: 279px) and (min-width: 1px) {
  display: none;
  }

`;
