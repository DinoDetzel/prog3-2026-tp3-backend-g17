const fs = require('fs/promises');
const path = require('path');

const usuariosPath = path.join(__dirname, '..', 'data', 'usuarios.json');

const register = async (req, res) => {
    console.log('registerController: petición de registro recibida');
    const { nombre, email, password, foto } = req.body;

    if (!nombre || !email || !password) {
        console.log('registerController: datos incompletos');
        return res.status(400).json({ success: false, mensaje: 'Nombre, email y password son requeridos' });
    }

    try {
        const data = await fs.readFile(usuariosPath, 'utf-8');
        const usuarios = JSON.parse(data);

        // verificar email no exista
        if (usuarios.some(u => u.email === email)) {
            console.log('registerController: email ya registrado:', email);
            return res.status(409).json({ success: false, mensaje: 'Email ya registrado' });
        }

        const nuevoId = usuarios.reduce((max, u) => Math.max(max, u.id || 0), 0) + 1;
        const nuevoUsuario = { id: nuevoId, nombre, email, password, foto: foto || '' };

        usuarios.push(nuevoUsuario);

        await fs.writeFile(usuariosPath, JSON.stringify(usuarios, null, 4), 'utf-8');

        console.log('registerController: usuario registrado con id', nuevoId);
        return res.status(201).json({ success: true, usuario: nuevoUsuario });

    } catch (error) {
        console.error('registerController: error al escribir usuarios', error);
        return res.status(500).json({ success: false, mensaje: 'Error al registrar usuario' });
    }
};

module.exports = { register };
