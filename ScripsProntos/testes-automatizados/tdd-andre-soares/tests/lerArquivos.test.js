const { expect } = require("chai");

describe(`Chama a função 'lerArquivo`, () => {
  describe(`Quando o arquivo é lido com sucesso`, () => {
    describe(`a resposta`, () => {

        const CONTENT='Tribo 16B';

      it("é uma string", async () => {
          const resposta = await lerArquivo('arquivo.txt');
          expect(resposta).a('string');
      });

      it("é igual ao conteúdo do arquivo",async () => {
        const resposta = await lerArquivo('arquivo.txt');
        expect(resposta).to.be.equal(CONTENT);
      });
    });
  });
  describe(`Quando a leitura de arquivo falha`, () => {
    describe(`resposta`, () => {
        it(`é uma string`,()=>{});
    });
  });
});
