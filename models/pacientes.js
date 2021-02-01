const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Paciente {
  adiciona(paciente, res) {
    
    const sql = 'INSERT INTO Atendimentos SET ?'
    
    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json(paciente)
      }
    })
  }
  
}

lista(res); {
  const sql = 'SELECT * FROM Pacientes'
  
  conexao.query(sql, (erro, resultados) => {
    if(erro) {
      res.status(400).json(erro)
    } else {
      res.status(200).json(resultados)
    }
  })
}


buscaPorId(id, res);{
  const sql = `SELECT * FROM Pacientes WHERE id=${id}`
  
  conexao.query(sql, (erro, resultados) => {
    const paciente = resultados[0]
    if(erro) {
      res.status(400).json(erro)
    } else {
      res.status(200).json(paciente)
    }
  })
}

altera(id, valores, res); {
  
  const sql = 'UPDATE Pacientes SET ? WHERE id=?'
  
  conexao.query(sql, [valores, id], (erro, resultados) => {
    if(erro) {
      res.status(400).json(erro)
    } else {
      res.status(200).json({...valores, id})
    }
  })
}

deleta(id, res); {
  const sql = 'DELETE FROM Pacientes WHERE id=?'
  
  conexao.query(sql, id, (erro, resultados) => {
    if(erro) {
      res.status(400).json(erro)
    } else {
      res.status(200).json({id})
    }
  })
}


module.exports = new Paciente