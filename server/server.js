const express = require('express')
const app = express()
const port = 5005

//DB CONNECTION
const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost/garaje-live-coding')
.then(() => console.log('Conectado a la bd'))

app.get('/', (req, res) => res.json({
    message:'Hello World oki'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))