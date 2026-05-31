const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
// GET todos los servicios
router.get('/', (req, res) => {
    try {
        perfilController.obtenerPerfil(req, res);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al leer perfil'
        });
    }
});

router.get('/:id', (req, res) => {
    try {
        perfilController.obtenerPerfilId(req, res);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al leer perfil'
        });
    }
});

module.exports = router;
