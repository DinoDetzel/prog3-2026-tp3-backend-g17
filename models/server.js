const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use('/equipo', require('../routes/equipoRoutes'))
        this.app.use('/servicios', require('../routes/serviciosRoutes'))
        this.app.use('/perfil', require('../routes/perfilRoutes'))
        this.app.use('/login', require('../routes/loginRoutes'))
        this.app.use('/register', require('../routes/registerRoutes'))
        this.app.use((req, res) => {
            return res.status(400).json({ msg: 'Error. Ruta no encontrada.' })
        })
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            return res.status(500).json({ msg: 'Error. Error interno del servidor.' })
        })

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })

    }


}

if (require.main === module) {
    const server = new Server();
    server.listen();
}

module.exports = Server;
