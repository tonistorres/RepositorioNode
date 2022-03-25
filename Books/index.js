const express = require("express");
const bodyParser = require('body-parser');
const router = require('./src/routes/route.book');
const { errorMiddleware } = require('./src/middleware/middleware');

const app = express();
app.use(bodyParser.json());
const PORT = 3001;

app.use(express.json());    

app.use('/book', router);

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));