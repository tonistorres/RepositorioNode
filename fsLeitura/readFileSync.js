const fs = require('fs');

const readFileSync = () => {

    fs.readFile('./talker.json', 'utf8', (error, data) => {
        if (error) {
            console.log(`ERROR: ${error}`)
            return
        }
    
        const jsonData = JSON.parse(data)

   return jsonData;
        
    });
}

// const result = readFileSync();
// console.log(result);