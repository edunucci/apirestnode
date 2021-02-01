const Paciente= require('../models/pacientes')

module.exports = app => {
    app.get('/pacientes', (req, res) => {
        Paciente.lista(res)
    })

    app.get('/pacientes/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Paciente.buscaPorId(id, res)
    })

    app.post('/pacientes', (req, res) => {
       const paciente = req.body

        Paciente.adiciona(paciente, res)
    }) 

    app.patch('/pacientes/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Paciente.altera(id, valores, res)
    })

    app.delete('/pacientes/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Paciente.deleta(id, res)
    })
}