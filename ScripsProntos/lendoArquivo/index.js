// fazendo uso do módulo fs nativo do node usado para escrita
// e leitura de arquivos
const fs = require("fs");

function main() {
  /** a função readFile executa a leitura de um arquivo que em nosso caso o nome dele é arquivo.txt
   * essa função recebe como parâmetro o caminho do diretorio onde se encontra o arquivo, e uma callback
   * contendo dois parâmetros um de erro (caso aconteça algo de errado na leitura do arquivo)  outro content
   * (é o conteudo do arquivo a ser lido em forma de sequencia de bytes)
   */
  fs.readFile("./arquivo.txt", (err, content) => {
    // aqui temos uma estrutura condicional simples para fazer a verificação
    // do primeiro parâmetro se erro true, ou seja, se algo der ruim
    if (err) {
      // imprima na função console.log a mensagem do erro capturado
      // pelo método message
      return console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
    // se não houver erro então será executado a leitura do arquivo com o uso do parâmetro content
    console.log(
      `Arquivo lido com sucesso. Conteúdo: ${content.toString("utf8")}`
    );
  });
}

main();
