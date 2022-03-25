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


module.exports = {
     findAll,
     findAllLimit,
}
