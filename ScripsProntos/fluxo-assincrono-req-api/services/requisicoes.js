// importar axios pacote externo que ira fazer requisiçoes 
// api
const axios = require('axios');
// aqui criamos uma função assincrona utilizando como requisicao a essa api
// o pacote externo axios. Essa api retorna o nome do pokemon pelo id que está 
// setado neste caso específico estamos passando o id 1
async function getPokemonById(id){


    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);    
        // neste caso estamos acessando um objeto data e a propriedade name dele 
        // que será retornada nesta requisicao 
        return response.data;    
    } catch (error) {
        console.log(`Deu ruim ${error.message}`);
        return {}
    }
    
}

// exportando o módulo 
module.exports=getPokemonById;