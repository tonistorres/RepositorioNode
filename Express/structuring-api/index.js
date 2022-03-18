/* index.js */
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 1, name: 'File na chapa', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Hamburguer ', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Xburguer', price: 35.0, waitTime: 25 },
  { id: 1, name: 'Pizza Quatro Queijos', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Pizza de Banana', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Pizza Frango', price: 35.0, waitTime: 25 },
  { id: 1, name: 'Pizza Atum', price: 40.0, waitTime: 30 },
  
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});