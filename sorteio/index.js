const numeroRandomicoGerado = require('./sorteio');
const entradaUsuario=require('./inputs');
const resultado =require('./resultadoSorteio');

function main(){
// entradas inputs
const numeroSorteado=numeroRandomicoGerado(0,10);
const numeroDigitado=entradaUsuario();
const imprimeNaTela=resultado(numeroSorteado,numeroDigitado);
console.log(`Resultado:${imprimeNaTela}`);
}

main();