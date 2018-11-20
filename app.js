const express = require('express')
const app = express()
const port = 7006

app.get('/', (req, res) => res.send('Hello I am Krunal Babaria from innovify!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
