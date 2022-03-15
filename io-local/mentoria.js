/* 
Dada a API com a url https://ping-pong-masters.herokuapp.com/ping
Quando feito um request do seu ip, gera-se um array com 100 posições aleatórias não repetidas e ela vai retornar resposta com um body como seguinte:
{
  "pong": 42
}
No primeiro request, ela vai retornar a primeira posição desse array.
Quando uma request for enviada com a primeira posição do array, a segunda será enviada
Num request com o body:
{
 "ping": 42 
} 
ela vai retornar a segunda posição do array no campo pong  da reposta;
E assim por diante;
Quando última posição do array for enviada na propriedade ping no body, a API retorna:
{ message: "Parabéns cê é Mestre do Tênis de Mesa" } 
 E recebendo essa mensagem o desafio será completo 
 */

 const axios = require("axios");

 const request = async ({ pong }) =>
   axios({
     method: "get",
     url: "https://ping-pong-masters.herokuapp.com/ping",
     data: {
       ping: pong
     }
   });
 
 async function main() {
   // Lógica aqui
 
   let response = await request({});
   while (response.data.message !== "Parabéns cê é Mestre do Tênis de Mesa") {
     response = await request(response.data);
     console.log(response.data);
   }
   console.log(response);
 }
 
 main();
 