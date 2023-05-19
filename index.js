const express = require('express')

const app = express()

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
   

    console.log(req)

    // const result = c1 + c2 + c3

    return res.json({ result: req })
})

app.listen(3333)