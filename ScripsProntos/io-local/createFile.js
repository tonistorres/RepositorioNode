// include node fs module
var fs = require("fs");
const readAsyncustom=require('./readAsyncFlie');

function createFileCustom(nameDoArqString) {
  try {
    const texto =
      "Tonis Alberto Torres Ferreira \n Douglas Torres dos Santos\n Alexandre Torres dos Santos\n";
    const arquivo = `"${nameDoArqString}.txt"`;
    fs.writeFile(arquivo, texto, () => {
      console.log("Arquivo criado com Successo!!");
      readAsyncustom(arquivo);
    });
  } catch (error) {
    console.log(`Erro ${error.message}`);
  }
}

module.exports = createFileCustom;
