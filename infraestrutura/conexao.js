const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  porta: 3306,
  user: 'root',
  password: '12345',
  database: 'pacienteconsultorio'
})

module.exports = conexao