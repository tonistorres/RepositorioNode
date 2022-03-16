// função que calcula o pelso e altual
const imc = (peso, altura) => {
  return peso / Math.pow(altura, 2);
};

const tblIMC = (resultIMC) => {
  if (resultIMC < 18.5) {
    return `Abaixo do peso (magreza)`;
  } else if (resultIMC >= 18.5 && resultIMC < 24.9) {
    return `Peso normal`;
  } else if (resultIMC >= 24.9 && resultIMC < 29.9) {
    return `Acima do peso (sobrepeso)`;
  } else if (resultIMC >= 29.9 && resultIMC < 34.9) {
    return `Obesidade grau I`;
  } else if (resultIMC >= 34.9 && resultIMC < 39.9) {
    return `Obesidade grau II`;
  } else {
    return `Obesidade graus III e IV`;
  }
};

/***
 * Exportando todas os metodos para serem reutilizado em outras classes
 * ou arquivos
 */
module.exports = {
  imc,
  tblIMC  
};