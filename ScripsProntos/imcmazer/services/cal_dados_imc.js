const { data, inputs } = require("../controllers/inputs");
const calcIMC = require("./imc");
const tblIMC = require("./tbl_indice");

const imcPerson = () => {
  /* bem mais estruturado toda lógica de controle de entradas.
  Tudo isolado no proprio módulo, desde as perguntas às variáveis
  ou objetos que guardam os valores capturados 
  */
  inputs();
  const indice = calcIMC(data.weight, data.height);
  const resultadoCalculoImc = tblIMC(indice);
  
let mensagem=`Seu Índece de Massa Corporal eh: ${indice.toFixed(2)}\n`
mensagem=mensagem.concat(`O Resultado da Consulta eh:${resultadoCalculoImc}`);
return console.log(mensagem);
  
  
};

module.exports = imcPerson;
