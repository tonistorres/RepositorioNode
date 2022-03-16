// disparando um erro
function main() {
  //Error() - é o erro genérico do javaScript
  const erro = new Error("Deu ruim xablau");
  console.log(`Mensagem de Erro: ${erro.message}`);
  console.log(`Nome do Erro: ${erro.name}`);
  console.log(`Pilha do Erro: ${erro.stack}`);
}

main();
