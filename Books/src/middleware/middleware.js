const errorMiddleware = (err, _req, res, _next) => {
    console.log(err);
    res.status(500).send("Erro no servidor! [MIDDLEWARE]");
  };

  function authMiddleware(req, res, next) {
    const { token } = req.headers; 
   
    if (token !== "bifeacebolado") {
      return res.status(401).send("Usuário não autorizado");
    }
   
    next();
  }
  
  
  module.exports = { errorMiddleware, authMiddleware }