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
 
  /*  À arrow function nomeUsuario recebe como parâmentro nome e retorna o nome 
  capturado via teclado meidiante a função readline.question que é do pacote externo
  readline-sync. Vale apenas ressaltar que a const nomeUsuario é uma arrow function 
  e que para ser executada deve ser invocado no módulo que fizer uso dela de comum modo 
  as demais funcitos como alturaUsuario e pesoUsuario tem a mesma didática com pequenas
  alteraçẽos no tocante ao tipo de dado capturado*/  
 const nomeUsuario = (nome) => {
   return (nome = readline.question("Qual o seu nome?\n"));
 };
 
 const alturaUsuario = (altura) => {
   return (altura = readline.questionFloat("Qual sua Altura?\n"));
 };
 
 const pesoUsuario = (peso) => {
   return (peso = readline.questionFloat("Qual é o seu peso?\n"));
 };
 
 /***
  * Exportando todas os metodos para serem reutilizado em outras classes 
  * ou arquivos
  */
 module.exports = {
   nomeUsuario,
   alturaUsuario,
   pesoUsuario,
 };
 