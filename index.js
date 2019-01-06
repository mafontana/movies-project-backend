const express = require('express');
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    queries.listAll().then(movie => res.status(200).send(movie)) 
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movie => res.status(200).send(movie))
})

app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.status(201).send(movies))
})

app.delete('/:id', (req, res) => {
    console.log(req.params)
    queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})

app.put("/:id", (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(updatedMovie => res.status(202).json(updatedMovie[0])).returning('*')
})


app.listen(port, () => console.log(`listening on port ${port}`))