class Tabelas {
  init(conexao) {
      this.conexao = conexao

      this.criarPacientes()
  }

  criarPacientes() {
      const sql = 'CREATE TABLE IF NOT EXISTS Pacientes (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, sexo varchar(20), convenio varchar(20), PRIMARY KEY(id))'

      this.conexao.query(sql, erro => {
          if(erro) {
              console.log(erro)
          } else {
              console.log('Tabela Pacientes criada com sucesso')
          }
      })
  }
}

module.exports = new Tabelas