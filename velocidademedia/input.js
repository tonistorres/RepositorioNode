/**Primeiro eu preciso importar o readline-sync qué é um pacote
 * externo mais eu baixei direto do npm e está instalado localmente
 * na pasta node_modules
 * Vou utilizar esse pacote para fazer a leitura via teclado
 * e printar a resposta (processamento ) na tela para usuário
 * que estiver interagindo com o códgio
 * Links:https://www.npmjs.com/package/readline-sync
 * Para instalar: npm i readline-sync
 */
 const readline = require("readline-sync");
 /* Bem para esse aplicativo vou criar 03 (três) funções
    que fará uso do pacote readline-sync
 */
  
 const distanciaMetros = (distancia) => {
  return (distancia = readline.questionFloat("Informe a distancia em metros(Float)?\n"));
 };
 
 
 const tempoSegundos = (tempo) => {
   return (tempo = readline.questionInt("Informe o tempo (Inteiro)?\n"));
 };
 
 /***
  * Exportando todas os metodos para serem reutilizado em outras classes 
  * ou arquivos
  */
 module.exports = {
   distanciaMetros,
   tempoSegundos   
 };
 