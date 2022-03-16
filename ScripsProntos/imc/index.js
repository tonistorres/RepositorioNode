/**Fs é módulo interno do node que nos possibilita lhe da com o sistema de arquivos
 * esse módulo tem funções para leitura e escrita de arquivos
 */
const fs=require('fs')

/**Bem para que nosso sistema ficasse exuto e não verboso 
 * utilizamos as boas práticas de programação para modularizar 
 * cada parte do programa fazendo com que cada módulo tenha 
 * sua propria responsabilidade e possa executá-la de forma 
 * satisfatória, com isso ganhamos em organização e mais nítidez 
 * na manutenção do código 
 */
const { nomeUsuario, alturaUsuario, pesoUsuario } = require("./input");
const imc = require("./imc");

function main() {
  const NOME_USUARIO = nomeUsuario();
  const ALTURA_USUARIO = alturaUsuario();
  const PESO_USUARIO = pesoUsuario();
  const RESULTADO = imc(ALTURA_USUARIO, PESO_USUARIO);
  fs.appendFileSync('imc.txt',(`Nome:${NOME_USUARIO} Resultado IMC:${RESULTADO.toFixed(2)}`));
  
}

main();
