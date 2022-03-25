const express = require("express");
const router = express.Router();
const { findAll, findAllLimit, getById } = require("../models/book.data");

const HTTP_STATUS_200 = 200;
// Na rota get ('/book') por meio da função findAll trazemos todos usuários Data Base
router.get("/", async (_req, response) => {
  try {
    const books = await findAll();
    if (books) {
      return response.status(HTTP_STATUS_200).json(books);
    }
    return response.status(HTTP_STATUS_200).send([]);
  } catch (error) {
    console.log(error.massege);
  }
});

// Rota getById - Buscar um registro filtrando pelo id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await getById(id);
        if (!book) {
          return res.status(404).send({ message: `Livro #${id} não existe` });
        }
        return res.send(book);      
    } catch (error) {
    console.log(error.message);        
    }  
});

// Rota getLimite - trazer registro mais limitando
router.get("/param", async (req, res) => {
  try {
    const { limit } = req.query;
    const books = await findAllLimit(limit);
    return res.send(books);
  } catch (error) {
    console.log(error.massege);
  }
});

module.exports = router;
