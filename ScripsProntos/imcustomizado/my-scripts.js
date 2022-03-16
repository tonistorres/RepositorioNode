// importando módulo local
const { nomeUsuario, alturaUsuario, pesoUsuario } = require("./input");
const {imc, tblIMC} =require('./formula');

function executa() {
  const usuario = nomeUsuario();
  const altura = alturaUsuario();
  const peso = pesoUsuario();

  const indiceMassaCorporal = imc(peso, altura);
  console.log(`Indice de massa corporal ${indiceMassaCorporal.toFixed(2)}`);
  const resultado=tblIMC(indiceMassaCorporal);
  console.log(`Resultado da consulta:${resultado}`)


  

}

// exportando uma módulo local
// a paritr desse momento estou
// passando para module que essa
// função executa() é publica, logo, pode
// ser acessada de outros locals
module.exports = executa;
