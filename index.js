const express = require('express') /// importando el modelo express
const app = express()

//http://localhost:3000/

app.get('/', (req, res) => {
    res.json({msg: 'hello get'})
})

app.get('/:user/:pass', (req, res) => {
    const {user, pass} = req.params
    if  (user === 'Yuliana' && pass=== '12345') { 
        res.json ({msg: 'iniciaste sesión con exito'}) 

    }
    
    res.json ({msg: 'error en el usuario y contraseña'})
})


app.post('/', (req, res) => {
    res.json({msg: 'hello post'})
})

app.put('/', (req, res) => {
    res.json({msg: 'hello put'})
})

app.patch('/', (req, res) => {
    res.json({msg: 'hello patch'})
})

app.delete('/', (req, res) => {
    res.json({msg: 'hello delete'})
})


app.listen(3000, () => {console.log('listening on port')})