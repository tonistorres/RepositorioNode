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


module.exports = {
     findAll,
     findAllLimit,
     getById,
}
