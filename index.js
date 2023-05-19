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

app.post('/teste', (req, res) => {

    return res.json({ result:  "lalala"})
})

app.listen(3333)