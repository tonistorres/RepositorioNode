/** Depois de instalarmos o Express iremos adicionanar
 * todos seus recurso a uma constante que nomeei de express
*/
const express = require('express');

// Seguindo Boas Práticas: Criando uma constante 
// para porta no caso da necessidade de mudar a porta 
// modificamos em um único local da aplicação e todos
// demais locais recebem essa alteração automagicamente
const APP_PORT=3000;

/* agora irei criar uma instancia de express essa instancia
a partir desse momento irá me da acesso a vários métodos do 
frameWork Express
*/
const app=express();

/*Agora vou criar um mine servidor web local em mémoria 
com o método listen do express ela recebe como parametro
a porta onde esse servidor. É comum passarmos uma callback
para informar ao usuario que o servidor está rodando 
*/
app.listen(APP_PORT,()=>console.log(`Servidor Rodando na Porta ${APP_PORT}`));
