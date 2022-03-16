// veja que para trabalhar com esse pacote ou modulo 
// com assincronicidade temos que fazer uma importação diferente 
const fs = require('fs').promises;


function readAsyncustom(nomeArqLeituraString){


  const nomeDoArquivo = `${nomeArqLeituraString}.txt`
  console.log(nomeDoArquivo);
  fs.readFile(nomeDoArquivo, 'utf8')
    .then((data) => {
      console.log(`Efeutada a Leitura o Resultado eh\n: ${data}`);
    })
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err.message}`);
      process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
    });
  

}

module.exports=readAsyncustom;