/*
1-Crie uma função que recebe três parâmetros retorna uma Promise .
2-Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
3-Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
4-Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
5-Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.*/

function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
    const result = (a + b) * c;
    if (result < 50) {
      return reject('Valor muito baixo');
    }
   resolve(result);
  });
}

doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))