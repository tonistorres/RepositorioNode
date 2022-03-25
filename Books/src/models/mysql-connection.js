/** Classe de conexão com mysql  */
const mysql = require('mysql2/promise');

const connectionMysql = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Books',
  password:'8Hyy+-XqcH8$c#-',
  port:'3306'
});

module.exports = { connectionMysql }