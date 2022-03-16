function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
    return Array.from({ length: 3 }).map(getRandomNumber);
}

const randomNumbers = Array.from({ length: 3 });
console.log("---------Gera um Array com N posicoes definida pelo length do Array.from---------");
console.log(randomNumbers);
console.log("--------A Função getRandomNumber e invocada uma unica vez no cenario atual--------");
const resultRandomico = getRandomNumber();
console.log(resultRandomico);
console.log("--------Array From Trabalhando conjuntamente com Funcao Randomica --------");
const resultCall=callDoMath();
console.log(resultCall);
console.log("----------------------------------------------------------------------------------");
