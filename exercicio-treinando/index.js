/* 1- Crie uma função que recebe três parâmetros retorna uma Promise .
   2-Adicionar validação para garantir que todos os valores são numéricos:
*/

function asinc (paramA, paramB,paramC){
return new Promise((resolve,reject)=>{
    if(paramA!=='number' || paramB!=='number'|| paramC!==number){
        reject('Informe Números')
    }
})
}