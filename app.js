const Server = require('./models/server');
const app = new Server();
app.listen();
const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const app = express();

app.use(cors());
app.use(express.json());


// RUTA PRINCIPAL
app.get('/', (req, res) => {

    res.send('API funcionando');

});



// LOGIN
app.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        // leer usuarios
        const data = await fs.readFile('./data/usuarios.json', 'utf-8');

        const usuarios = JSON.parse(data);

        // buscar usuario
        const usuario = usuarios.find(
            u => u.email === email && u.password === password
        );

        // verificar
        if (!usuario) {

            return res.status(401).json({
                success: false,
                mensaje: 'Email o contraseña incorrectos'
            });

        }

        // respuesta exitosa
        res.json({
            success: true,
            usuario
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            mensaje: 'Error en login'
        });

    }

});


module.exports = app;