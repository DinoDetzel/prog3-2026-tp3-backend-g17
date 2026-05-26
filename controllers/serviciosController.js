const serviciosData = require('../data/servicios.json');

const obtenerServicios = (req, res) => {
    res.json({ message: 'Obteniendo servicios', data: serviciosData });
};

const obtenerServiciosId = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'El id debe ser un número' });
    }

    let mensaje = 'Obteniendo servicio con id ' + id;
    const data = serviciosData.forEach(servicio => {
        if (servicio.id === id) {
            return res.json({ message: `Obteniendo servicio con id ${id}`, data: servicio });
        }
    });

    if (!data) {
        return res.status(404).json({ message: `Servicio con id ${id} no encontrado` });
    }
};

module.exports = {
    obtenerServicios,
    obtenerServiciosId
};