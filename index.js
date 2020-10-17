const express = require('express')
const app = express()
const port = process.env.PORT || 3007
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/canchas/list', (req, res) => {
    res.send(['1', '2', '3', '4', '5'])
})
 
app.get('/api/user/id/:id', (req, res) => {
    res.send(req.params.id)
})

app.get('/api/user/:nombre/:apellido', (req, res) => {
    //res.send(req.params.nombre)
    //res.send(req.params.apellido)
    //Lo envía en formato objeto en el de req.params
    res.send(req.params)
})

app.listen(port, () => console.log('Escuchando puerto: ' +port))