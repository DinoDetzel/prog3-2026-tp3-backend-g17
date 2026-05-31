const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/', async (req, res) => {
    try {
        await registerController.register(req, res);
    } catch (error) {
        console.error('Error en route /register', error);
        res.status(500).json({ success: false, mensaje: 'Error al registrar usuario' });
    }
});

module.exports = router;
