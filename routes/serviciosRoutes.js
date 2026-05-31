const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');
// GET todos los servicios
router.get('/', (req, res) => {
    try {
        serviciosController.obtenerServicios(req, res);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al leer servicios'
        });
    }
});

// GET servicio por ID
router.get('/:id', (req, res) => {
    try {
        serviciosController.obtenerServiciosId(req, res);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al leer servicios'
        });
    }
});

module.exports = router;
