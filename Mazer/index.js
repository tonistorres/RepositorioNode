/** Depois de instalarmos o Express iremos adicionanar
 * todos seus recurso a uma constante que nomeei de express
*/
const express = require('express');


/* agora irei criar uma instancia de express essa instancia
a partir desse momento irá me da acesso a vários métodos do 
frameWork Express
*/
const app=express();


// Seguindo Boas Práticas: Criando uma constante 
// para porta no caso da necessidade de mudar a porta 
// modificamos em um único local da aplicação e todos
// demais locais recebem essa alteração automagicamente
const APP_PORT=3000;


/**Criando um exemplo de banco de dados para trabalharmos com exemplos de rotas */

let books =[

    {id:1, title:"O Senhor do Anéis", author:'J.R.R. Tolkien'},
    {id:2, title:"Duna", author:'Frank Herbert'},
    {id:3, title:"Fundação", author:'Isaac Asimov'},
    {id:4, title:"O Homem do Castelo Alto", author:'Philip K Dick'},
    {id:5, title:"1984", author:'George Orwell'},
    {id:6, title:"Adimiravel Mundo Novo", author:'Aldous Huxley'},
    
    ];
    
/*Criando o primeiro método Verbo GET express fica escutando 
se houver alguma requisição para rota raiz retorne a lógica 
que irei inserir dentro.O Método GET recebe uma função anonima 
contendo dois parâmetros, que o express injeta nessa função na variável  
request todas as informações necessárias pra que eu possa trabalhar a minha lógica
de comum modo também já disponibiliza a variável response prontinha para eu construir
minha resposta da melhor maneira possível. 
*/
app.get('/',(request, response)=>{
return response.status(200).send('Hello World APIs Http');
});

/*Criar um end-point que retorna todos os livros da minha biblioteca */

app.get('/books', (req,res)=>{
// // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// const result = books.slice(0,qty || books.length);
    res.status(200).send(books);
});


app.get('/books/:id',(req,res) =>{
    const {id }=req.params;
    const book= books.find((book)=>book.id===parseInt(id));
    if(!book){
        return res.status(404).json({msg:"Erro na requisição"})
    }
    
    return res.status(200).json(book)
});




/*Agora vou criar um mine servidor web local em mémoria 
com o método listen do express ela recebe como parametro
a porta onde esse servidor. É comum passarmos uma callback
para informar ao usuario que o servidor está rodando 
*/
app.listen(APP_PORT,()=>console.log(`Servidor Rodando na Porta ${APP_PORT}`));
