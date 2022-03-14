const inputs=require('./inputs');
const fatorial=require('./fatorial');


function main(){


const entradaTeclado=inputs();

 const resultado =fatorial(entradaTeclado);
 console.log(`Fatorial de ${entradaTeclado}! é ${resultado}`);

}

main();