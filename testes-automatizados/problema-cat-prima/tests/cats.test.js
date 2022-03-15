const { expect, assert } = require("chai");
const cats = require("../cats");
const sinon = require("sinon");
const axios = require("axios");

// https://app.betrybe.com/course/live-lectures/sd-cohort-15-a#aula-223-mocha-chai-e-sinon-testes-de-back-end-com-nodejs

describe("Executa a função que gera N Fatos sobre gatos", () => {

  beforeEach(() => {
    sinon.stub(axios, "get").resolves({
      data: {
        fact: "Cats bury their feces to cover their trails from predators.",
        length: 59,
      },
    });
  });

  afterEach(() => {
    axios.get.restore();
  });


  it("Existe a declaracao de uma funcao", () => {
    expect(cats).to.be.a("function");
  });

  it(`É lançado um erro com a mensagem ['Entrada inválida']`, async () => {
    /**veja dentro do expect como executei a função cats coisas da documentação */
    try {
      await cats({});
      assert(false);
    } catch (error) {
      assert(true, "input invalido");
    }
  });

  it(`Quando N =0 retorna um array vazio`, async () => {
    const facts = await cats(0);
    expect(facts).to.be.an("array");
    expect(facts).to.be.have.length(0);
  });

  it("Qdo N > 0 retorna um array de tamanho N", async () => {
   


    const facts = await cats(5);
    expect(facts).to.an("array");
    expect(facts).to.have.length(5);
  });

  it("retorna um array de strings", async () => {
    const facts = await cats(5);
    facts.forEach((fact) => expect(fact).to.be.a("string"));
    expect(facts).to.have.length(5);
  });

  it("retorna fatos sobre gatos", async () => {
    const facts = await cats(5);
    facts.forEach((fact) => expect(fact.length).to.be.greaterThan(0));
  });
});
