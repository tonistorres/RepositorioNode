// index.js
const convert = require('./usdToBrl');

const usd = 10;
const brl = convert(usd);


function main(){
    console.log(brl) 
}

main();