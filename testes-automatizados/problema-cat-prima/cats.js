const axios = require("axios");

async function getCats(numFacts) {
  
    if (typeof numFacts !== "number") throw Error("Entrada inválida");
  
  const results = [];

  try {
    for (let i = 0; i <numFacts; i+=1) {
        let factResponse = await axios.get("https://catfact.ninja/fact");      
        results.push(factResponse.data.fact);
        
    } 
    return results; 
  } catch (error) {
      return [];
  }
    
   
  
}


getCats(1);
module.exports = getCats;
