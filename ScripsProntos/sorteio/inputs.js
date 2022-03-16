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
//  const valorMinimo = (minimo) => {
//    return (minimo = readline.questionInt("Entre com um valor Inteiro Mínimo?\n"));
//  };
 
//  const valorMaximo = (maximo) => {
//    return (maximo = readline.questionInt("Entre com um valor Inteiro Máximo ?\n"));
//  };

 const entradaUsuario =(numeroDigitado) =>{
    return (numeroDigitado = readline.questionInt("Entre 0 e 10 ?\n"));
 }
 
 module.exports = entradaUsuario;
 
