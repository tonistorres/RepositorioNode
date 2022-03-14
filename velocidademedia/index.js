// importando módulo local input que contém duas funções 
// de interação com o usuário 
// Nesse ponto estou fazendo o destructuring
const {distanciaMetros, tempoSegundos}=require('./input');
// vou importar um modulo local sem uso de destructuring 
// e utilizar a funcão ou método exportado por ela 
const velocidadeMedia=require('./velocidade');


function main(){
const distancia=distanciaMetros();
const tempo=tempoSegundos();
const velocidade=velocidadeMedia(distancia,tempo);
console.log(`Velocidade média é ${velocidade} m/s`);
}

main();