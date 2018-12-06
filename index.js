const express = require('express');
const app = express()
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send("hi server!!!")
    
})

app.listen(port, () => console.log(`listening on port ${port}`))