// Utilizando pacote externo readLine-sync 
// Link: https://www.npmjs.com/package/readline-sync
// Inspalando no Projeto: npm i readline-sync 
const readline = require('readline-sync');


const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log('Hello, world!');
console.log(`Por onde andas? tens visto
meu servo ${name} ele só tem ${age} mais é muito sincero ao meus olhos.`);