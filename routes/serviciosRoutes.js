const express = require('express');
const router = express.Router();

// GET todos los servicios
router.get('/', (req, res) => {
    res.json({ message: 'GET bbnnnbbnbn servicios' });
});

// GET servicio por ID
router.get('/:id', (req, res) => {
    res.json({ message: `GET servicio ${req.params.id}` });
});

module.exports = router;
