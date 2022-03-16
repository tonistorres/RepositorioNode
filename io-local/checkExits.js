const fs = require("fs");

const fileName = "./meu-arquivo.txt";

const arquivoExisteSync = (filename) => {
  try {
    if (fs.existsSync(filename)) {
      console.log("O Arquivo existe");
    }
    throw new Error("Arquivo não existe");
  } catch (error) {
 
    console.log(`O erro:${error.message}`);
 
    if('Arquivo não existe'){
      console.log('Disparei o Erro na Linha 10 e Capturei\n com if e vida que segue...');
      // saindo de um programa node.
      //O módulo process core fornece 
      // um método prático que permite que
      // você saia programaticamente de um programa Node.js: process.exit().
      // docummentação:https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
       process.exit(1);
    }

  }
};

const main = () => {
  arquivoExisteSync(fileName);
};

main();
