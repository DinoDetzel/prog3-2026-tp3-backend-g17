const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipoController');
// GET todos los equipos
router.get('/', (req, res) => {
    try {

        equipoController.obtenerEquipos(req, res);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al leer equipos'
        });
    }

});


module.exports = router;
