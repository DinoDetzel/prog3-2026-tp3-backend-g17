const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');
// GET todos los servicios
router.get('/', (req, res) => {
    serviciosController.obtenerServicios(req, res);
});

// GET servicio por ID
router.get('/:id', (req, res) => {
    serviciosController.obtenerServiciosId(req, res);
});

module.exports = router;
