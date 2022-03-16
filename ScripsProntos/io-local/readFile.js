// fazendo requisição de um módulo nativo do node para leitura e escrita de arquivos 
const fs = require("fs");

// criando uma constante que conterá o nome do meu aquivo de texto neste cenário
  const nomeDoArquivo = "meu-arquivo.txt";

  //Nesse ponto eu tenho um objeto fs onde eu invoco uma função interna do mesmo para fazer 
  // a leitura do meu arquivo no cenário aqui proposto. esse método recebe alguns parametro
  // entre eles o nome do aquivo o encode mais uma callback que por sua vez recebe dois parametro
  // um para capturar o erro caso dê ruim e outro para fazer a leitrura do pacote chamaodo data 
  //

  fs.readFile(nomeDoArquivo, "utf8", (err, data) => {
    if (err) {
      console.error(
        `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`
      );
      // saindo de um programa node.
      //O módulo process core fornece 
      // um método prático que permite que
      // você saia programaticamente de um programa Node.js: process.exit().
      // docummentação:https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
      process.exit(1);
    }
    console.log(`Conteúdo do arquivo: ${data}`);
  });
