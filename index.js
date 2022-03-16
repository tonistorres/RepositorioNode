/* para podermos capturar caracter do teclado fizemos a importação de um pacote 
 externo do npm (controlado de dependencia) node readline-sync*/
const readline = require("readline-sync");

/* criamos um array de objetos onde cada objetos tem 02(duas) chaves(name, script) e valor uma 
name: descreve o que a função faz;
valor: descreve o caminho de onde esse scriprt está alocado.
*/
const scripts = [
  { name: "Calcular IMC", script: "./imcustomizado/index.js" },
  { name: "Calculo IMC MAZER", script: "./imcmazer/index.js" },
  { name: "Calcular velocidade média", script: "./velocidademedia/index.js" },
  { name: "Calculo Fatorial", script: "./fatorialNumber/index.js" },
  { name: "Convert", script: "./convert/index.js" },
  { name: "Dog Name", script: "./dog-names/index.js" },
  { name: "Fluxo async req API Pokemon", script: "./fluxo-assincrono-req-api/index.js" },
  { name: "Hello World", script: "./hello-world/index.js" },
  { name: "Jogo de adivinhação", script: "./sorteio/index.js" },
  { name: "Velocidade Media", script: "./velocidademedia/index.js" },  
];

/* Utilizaremos a função map para iterar o array de objetos scrpts e gerar uma
lista numerada com o name do que cada função faz para isso utilizaremos o map 
que me retorna a lista numerada
*/

let mensagem = scripts.map((script, index) => `[${index + 1}] - ${script.name}\n`);

/**
 * O método unshift() adiciona um ou mais elementos ao início de um array
 * e retorna o novo comprimento do array.
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */
mensagem.unshift("Escolha um número para executar o script correspondente\n");

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join("\n");

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) console.log(`\n [[[ Número inválido. Saindo ]]]\n`);

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
console.log(script);
require(script.script);

