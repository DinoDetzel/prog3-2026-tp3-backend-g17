const equipoData = require('../data/equipo.json');

const obtenerEquipos = (req, res) => {

    if (!equipoData || equipoData.length === 0) {
        return res.status(404).json({ message: 'No se encontraron equipos' });
    }
    res.json({ message: 'obtener equipos', data: equipoData });
}

module.exports = {
    obtenerEquipos
};