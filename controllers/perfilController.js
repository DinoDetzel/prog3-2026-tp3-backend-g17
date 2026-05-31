const perfilData = require('../data/perfil.json');
const obtenerPerfil = (req, res) => {
    if (!perfilData || perfilData.length === 0) {
        return res.status(404).json({ message: 'No se encontraron perfiles' });
    }
    res.json({ message: 'obtener perfiles', data: perfilData });
};
const obtenerPerfilId = (req, res) => {
    const id = parseInt(req.params.id);
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'El id debe ser un número' });
    }
    let mensaje = 'Obteniendo perfil con id ' + id;
    const data = perfilData.forEach(perfil => {
        if (perfil.id === id) {
            return res.json({ message: `Obteniendo perfil con id ${id}`, data: perfil });
        }
    });
    if (!data) {
        return res.status(404).json({ message: `Perfil con id ${id} no encontrado` });
    }
};
module.exports = {
    obtenerPerfil,
    obtenerPerfilId
};