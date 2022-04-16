const express = require("express");
const router = express.Router();
const { findAll, findAllLimit, getById, create, update}  = require("../models/book.data");

const HTTP_STATUS_200 = 200;
const HTTP_STATUS_201 = 201;
const HTTP_STATUS_500 = 500;
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
    return res.status(HTTP_STATUS_500).end();
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
      return res.status(HTTP_STATUS_500).end();
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
    return res.status(HTTP_STATUS_500).end();      
    }  
});
// rota criar um registro no banco de dados 
router.post('/', async (req, res) => {
    try {
      const { titulo, autor, edicao } = req.body;
      const book = await create({titulo, autor, edicao});
      return res.status(HTTP_STATUS_201).json(book);
    } catch (error) {
      console.log(error);
      return res.status(HTTP_STATUS_500).end();
    }
  });

  // rota alterar registro no banco de dados 
router.put("/:id", async (req, res) => {
    const { titulo, autor, edicao } = req.body;
    const { id } = req.params;
    const book = await update({id, titulo, autor, edicao});
    return res.status(HTTP_STATUS_201).send(book);
  });
  
  

module.exports = router;
