const mysql = require('mysql2/promise');
const { connectionMysql } = require('./mysql-connection');

const findAll = async () => {
    const [ books ] = await connectionMysql.execute('SELECT * FROM books');  
    return books;
}

const findAllLimit = async (limit) => {
    const [ books ] = await connectionMysql.execute('SELECT * FROM books LIMIT ?', [ limit ]);
    return books;
}

const getById = async (id) => {
    const [book] = await connectionMysql.execute('SELECT * FROM books WHERE id = ?', [id]);
    return book;
}


const create = async ({ titulo, autor, edicao }) => {
    const  [ { insertId } ] = await connectionMysql.execute('INSERT INTO books (titulo, autor,edicao) VALUES (? , ? , ?)', [ titulo, autor, edicao ]);
    return {
        id: insertId,
        titulo,
        autor,
        edicao,
    }
}


module.exports = {
     findAll,
     findAllLimit,
     getById,
     create,
}