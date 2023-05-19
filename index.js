const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: "Server is up" })
})

app.get('/atualizou', (req, res) => {
    return res.json({ message: 'atualizou is up' })
})

app.get('/meupau', (req, res) => {
    return res.json({ message: 'atualizou is up' })
})

app.post('/teste', (req, res) => {
    const { c1, c2, c3 } = req.body

    console.log(req)

    const result = c1 + c2 + c3

    return res.json({ result: result })
})

app.listen(3333)