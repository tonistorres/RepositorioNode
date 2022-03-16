// ESTRUTURA BÁSICA PARA UMA APLICAÇÃO EXPRESS

// Comentando Linha a Linha:

/*Bem aqui importamos o framework express que são funçẽos 
de alta complexidade prontas e testadas para uso dos desenvolvedores
em gerais ... Estamos importando esse framework por meio do método 
require do node e capturando todos os métodos embutido nesse módulo 
(express) para minha constante express que em js diferente de java 
consegue guardar uma função em seu "escopo" meio estranho mais é assim 
que as coisas funcionam por aaqui 
*/
 const express = require('express');
 /* bem aquiinstancio uma outra constante que app
 e invoco a contante express para dentro da constante app 
 que para mim parece ser redundante, porém...
 */
const app = express(); // 1

/*Bem nesse ponto tenho app que já contém todos os métodos do expresse dentro 
dele devido os requerimentos acima explicitado, então, irei fazer uso do método
get() para fazer uma requisição a api que me forneceu um end point /hello
que executa uma função 
*/
app.get('/hello', handleHelloWorldRequest); // 2
/* Aqui vou fazer uso do método  listen que é um pequeno servidor para testar 
nossa API de forma local, esse método recebe como parâmetro 02(dois) parâmetros
1- a porta onde ele irá rodar a aplicaão submetida a ele;
2- uma callback responsável pela execução de todo codigo embutido no seu escopo
 */ 
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

// chamada da função 
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}