const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/', (req, res) => {
    try {
        loginController.login(req, res);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al loguearse'
        });
    }
});


module.exports = router;
