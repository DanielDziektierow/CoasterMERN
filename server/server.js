const express = require('express')
const app = express()
const port = 5005

//DB CONNECTION
const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost/garaje-live-coding')
.then(() => console.log('Conectado a la bd'))

//Model

const Coaster = require('./Models/Coaster.model')

// CORS

const cors= require('cors')
app.use(cors())

//Routing
app.get('/api/coasters', (req, res) => {

    Coaster
    .find()
    .then(allCoasters => res.json(allCoasters))
})

app.get('/api/details/:coaster_id', (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))