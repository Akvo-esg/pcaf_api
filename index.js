const express = require('express')

const app = express()

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.get('/', (req, res) => {
    return res.json({ message: "Server is up" })
})

app.get('/atualizou', (req, res) => {
    return res.json({ message: 'atualizou is up' })
})

app.get('/meupau', (req, res) => {
    return res.json({ message: 'meu pau is up' })
})

app.get('/teste', (req, res) => {

    // const {c1, c2, c3} = req.query

    // const result = +c1/(+c2 + +c3 + +c1)

    const data = JSON.parse(req.query[0])

    const valorEmprestimo = +data.valorEmprestimo
    const capitalProprio = +data.capitalProprio
    const recursosTerceiros = +data.recursosTerceiros

    const result = valorEmprestimo / (capitalProprio + recursosTerceiros + valorEmprestimo)

    const response = {
        fatorAtribuicao: result
    }


    return res.json({ response: JSON.stringify(response) })
})



app.get('/pcafCalculator', (req, res) => {

    const data = JSON.parse(req.query[0])

    const valorEmprestimo = +data.valorEmprestimo
    const capitalProprio = +data.capitalProprio
    const recursosTerceiros = +data.recursosTerceiros

    const result = valorEmprestimo / (capitalProprio + recursosTerceiros + valorEmprestimo)

    const response = {
        fatorAtribuicao: result
    }

    return res.json({ response: JSON.stringify(response) })

})

app.listen(3333)