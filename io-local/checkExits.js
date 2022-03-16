const fs = require("fs");
const createFileCustom=require('./createFile');

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
    createFileCustom('arquivoCriado');
    
    }

  }
};

const main = () => {
  arquivoExisteSync(fileName);
};

main();
