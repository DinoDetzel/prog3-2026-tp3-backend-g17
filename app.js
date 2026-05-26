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


// GET TODOS LOS SERVICIOS
app.get('/servicios', async (req, res) => {

    try {

        const data = await fs.readFile('./data/servicios.json', 'utf-8');

        const servicios = JSON.parse(data);

        res.json(servicios);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al leer servicios'
        });

    }

});


// GET SERVICIO POR ID
app.get('/servicios/:id', async (req, res) => {

    try {

        const data = await fs.readFile('./data/servicios.json', 'utf-8');

        const servicios = JSON.parse(data);

        const servicio = servicios.find(
            s => s.id == req.params.id
        );

        res.json(servicio);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error'
        });

    }

});


// GET EQUIPO
app.get('/equipo', async (req, res) => {

    try {

        const data = await fs.readFile('./data/equipo.json', 'utf-8');

        const equipo = JSON.parse(data);

        res.json(equipo);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al leer equipo'
        });

    }

});


// PERFIL POR ID
app.get('/perfil/:id', async (req, res) => {

    try {

        // leer archivo JSON
        const data = await fs.readFile('./data/perfil.json', 'utf-8');

        // convertir texto a array JS
        const perfiles = JSON.parse(data);

        // buscar perfil por id
        const perfil = perfiles.find(
            p => p.id == req.params.id
        );

        // verificar si existe
        if (!perfil) {

            return res.status(404).json({
                mensaje: 'Perfil no encontrado'
            });

        }

        // devolver perfil
        res.json(perfil);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al leer perfil'
        });

    }

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