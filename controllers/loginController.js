const perfilData = require('../data/perfil.json');
const userData = require('../data/usuarios.json');

const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            mensaje: 'Email y contraseña son requeridos'
        });
    }
    // leer usuarios

    if (!userData || userData.length === 0) {
        return res.status(500).json({
            success: false,
            mensaje: 'Error al leer usuarios'
        });
    }

    // buscar usuario
    const usuario = userData.find(
        u => u.email === email && u.password === password
    );

    // verificar
    if (!usuario) {

        return res.status(401).json({
            success: false,
            mensaje: 'Email o contraseña incorrectos'
        });

    }

    // respuesta exitosa
    res.json(
        {
            message: `Usuario logueado`,
            data: {
                success: true,
                usuario: usuario
            }
        }
    );
};
module.exports = { login };