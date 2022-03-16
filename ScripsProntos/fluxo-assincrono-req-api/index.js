const getPokemonById = require("./services/requisicoes");

// criando uma função pega um pokemon passando um id
const buscarPokemonId = async () => {
  const resposta = await getPokemonById(1);
  console.log(resposta.name);
};

// criar um função que lista os 10 primeiro pokemons da api
const buscarVariosPokemonsId = async () => {
  for (let i = 1; i < 11; i += 1) {
    const resposta = await getPokemonById(i);
    console.log(`[${i}] ${resposta.name} -->> metodo async`);
  }
};

// criar uma função para salvar num array
// Caso queira testa em caso de erro inicialize 
// o i do for com ZERO não existe pokemon com id
// IGUAL a ZERO vai quebrar a aplicação
const buscarVariosSalvaArray = async () => {
  const promises = [];
  for (let i = 1; i < 11; i += 1) {
    const pokemonPromise = await getPokemonById(i);
    promises.push(pokemonPromise);
  }
  
  // Usanso o método Promise.all() para esperear resolver todas as promises para
  // só então disponibilizar a resposta para ser trabalhadas.
  // vou criar uma constante que será um array de promisesresolvidas

  const todasPromisesResolvidas = await Promise.all(promises);
  // percorrer todos os itens com forEach
  todasPromisesResolvidas.forEach((pokemon)=>{
console.log(`Pokemon ${pokemon.name}`);
  })
};

// declarando a funcao main
const main = async () => {
  //   await buscarPokemonId();
  // await buscarVariosPokemonsId();
  await buscarVariosSalvaArray();
};

// executando funcao main
main();
