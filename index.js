const express = require('express');
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    queries.listAll().then(movie => res.send(movie)) 
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movie => res.send(movie))
})





app.listen(port, () => console.log(`listening on port ${port}`))