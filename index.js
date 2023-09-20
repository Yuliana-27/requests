const express = require('express') /// importando el modelo express
const app = express()

//http://localhost:3000/

app.get('/', (req, res) => {
    res.json({msg: 'hello get'})
});

app.get('/:user/:pass', (req, res) => {
    const {user, pass} = req.params
    if  (user === 'yuliana' && pass=== '123') { 
        res.json ({msg: 'iniciaste sesión con exito'}) 

    }
    
    res.json ({msg: 'error en el usuario y contraseña'})
});
    //   http://localhost:3000/login?user=yuliana&password=123&email=montesyuliana713@gmail.com


app.get('/login', (req, res)=>{
    const {user, password} = req.query

    if  (!user || !password) { 
        res.status(400).json ({msg: 'You need to provide <user> and <password> parameters'}) 
        return

    }

    if  (user === 'yuliana' && password=== '123') { 
        res.json ({msg: 'Iniciaste sesión con éxito'}) 
        return

    }
    
    res.status(404).json ({msg: 'error en el usuario y contraseña'})
});

app.post('/', (req, res) => {
    res.json({msg: 'hello post'})
});

app.put('/', (req, res) => {
    res.json({msg: 'hello put'})
});

app.patch('/', (req, res) => {
    res.json({msg: 'hello patch'})
});

app.delete('/', (req, res) => {
    res.json({msg: 'hello delete'})
});


app.listen(3000, () => {console.log('listening on port 3000')})