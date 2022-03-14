
/**
 * Formula: N! = N*(N-1)*(N-2)*...(N-(N-1))
 * 5! = 5*(5-1)*(5-2)*(5-3)*(5-4)
 * 5! = 5*4*3*2*1
 * 5! 120
 * https://www.youtube.com/watch?v=7To_e7Zn0V4
 */
const calculoFatorial= (numero) =>{
  
  if(numero%1===0){
    var fatorial=numero;
    for (let contador = 1; contador < numero; contador+=1) {
        fatorial=fatorial* (numero-contador);
    }
    return fatorial;

  }
  
return 'O numero digitado não é inteiro';

}



module.exports=calculoFatorial;