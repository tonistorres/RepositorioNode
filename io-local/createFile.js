// include node fs module
var fs = require("fs");

// Criando um arquivo txt caso ele não exista na raiz do projeto a função
// writeFile cria o arquiv
// fs.writeFile('./newfile.txt','Título',(err)=> {
//   if (err) throw err;
//   console.log('Arquivo criado com Successo!!');
// });

function createFileCustom(nameDoArqString) {
  try {
    const arquivo = `"${nameArq}.txt"`;
    fs.writeFile(arquivo, "Título", () => {
      console.log("Arquivo criado com Successo!!");
    });
  } catch (error) {
    console.log(`Erro ${error.message}`);
  }
}

createFileCustom('tonis');