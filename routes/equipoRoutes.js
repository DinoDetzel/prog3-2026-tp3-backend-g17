const express = require('express');
const router = express.Router();

// GET todos los equipos
router.get('/', (req, res) => {
    res.json({ message: 'GET equipo' });
});

// GET equipo por ID
router.get('/:id', (req, res) => {
    res.json({ message: `GET equipo ${req.params.id}` });
});

module.exports = router;
