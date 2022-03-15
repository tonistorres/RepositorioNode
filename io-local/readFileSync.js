// importando o modulo nativo do node para leitura 
// de arquivos
const fs = require('fs');

// criando uma constatnte que rebebe o nome de uma arquivo neste caso 
// um arquvio txt
const nomeDoArquivo = 'meu-arquivo.txt';
//utilizando o bloco try catcha para tratamento de erros de exceções
try {

  // criando uma constante data que recebera a leitura do método 
  // readFileSync que é um método nativo do node que recebe como 
  // o caminho e nome do arquivo mais a usado para comunicação eletrônica
  // esse utf8 em grosso modos permite leitura de caracter especial da nossa 
  // lingua (portuguesa) sem que quebre na hora de colocar isso visualmente para 
  // o usuário  
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  // em seguida dou um print na tela dos dados lidos do meu-arquivo.txt
  console.log(data);


} catch (err) {
    // em caso de erro o mesmo será capturada e será explicitado 
    // um log do erro 
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}