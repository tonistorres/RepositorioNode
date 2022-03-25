const express = require('express')
const router = express.Router();
const { findAll, findAllLimit } = require("../models/book.data");

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

// Rota getLimite - trazer registro mais limitando 
router.get("/param", async (req, res) => {
    const { limit } = req.query;
    const books = await findAllLimit(limit);
    return res.send(books);
  });

module.exports = router;