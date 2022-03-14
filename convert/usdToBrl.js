/** Essa constante tem uma constante contendo o valor
 * de 1 dolar quando comparado com a moeda brasileira 
 */

const brl = 5.37;

// Aqui temos uma arrow function que recebe como parâmetro 
// esse valor do dólar convertido em real onde participará
// da solução do escopo da função. 
// Logo teremos o retorno da multiplicação do valor recebido em dolar
// pela o valor do dolar em reais brasileiro 
// tendo como retorno o valor convertido em real 
const usdToBrl = (valueInUsd) => valueInUsd * brl;

// exportando a função 
module.exports = usdToBrl;