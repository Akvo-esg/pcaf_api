const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({message: "foi caraio"})
})

app.listen(3333)