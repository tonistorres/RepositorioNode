// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// retorna um valor randomico entre o menor e maior valor passado no parametro 
// da função
function randomicoIntervalo(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

module.exports=randomicoIntervalo;