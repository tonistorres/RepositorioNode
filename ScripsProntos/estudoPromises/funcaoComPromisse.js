function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error("Não pode dividir um número por ZERO"));
    const resultado=num1/num2;
    resolve(resultado);
  });

  return promise;
}

//invocar a função

calcularDivisao(2,1)
.then((result)=>console.log(result))
.catch(erro=>console.log("erro %s", erro.message));