// divisão de dois numero

function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error("Não pode ser feito uma divisao por zero");
  const resultado = num1 / num2;
  return resultado;
}

module.exports=calcularDivisao;