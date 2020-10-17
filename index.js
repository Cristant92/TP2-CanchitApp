const express = require('express')
const app = express()
const port = process.env.PORT || 3007
 
var usuarios = [
    {dni: 93688330, nombre: 'Adrian', apellido: 'Tamashiro', email: 'adriantama@email.com', fecha_nacimiento: '12-03-1991'},
    {dni: 12345678, nombre: 'Cristian', apellido: 'Ciz', email: 'crisciz@email.com', fecha_nacimiento: '16-10-1992'},
    {dni: 12121212, nombre: 'Mariam', apellido: 'Sleiman', email: 'marsleiman@email.com', fecha_nacimiento: '04-10-1995'},
    {dni: 99893289, nombre: 'Alejandro', apellido: 'Facchinelli', email: 'alefacchinelli@email.com', fecha_nacimiento: '21-08-1992'},
    {dni: 43289127, nombre: 'Rocio', apellido: 'Vargas', email: 'rociovargas@email.com', fecha_nacimiento: '21-05-1992'}
];

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

app.get('/api/usuarios/', (req, res) => {
    res.send(usuarios)
})

app.listen(port, () => console.log('Escuchando puerto: ' +port))