const { expect } = require("chai");
const cats = require("../cats");

describe("Executa a função que gera N Fatos sobre gatos", () => {
  it("Existe a declaracao de uma funcao", () => {
    expect(cats).to.be.a("function");
  });

  describe("Quando N não é um número", () => {
    it(`É lançado um erro com a mensagem [Input inválido]`, () => {
      const cats = () => {};
      expect(cats).to.throw(Error(`[Input Inválido]`));
    });
  });
});
