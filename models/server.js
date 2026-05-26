//const app = require('../app');

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en puerto ${PORT}`);
// });
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
    }
    routes() {
        this.app.use('/equipo', require('../routes/equipoRoutes'))
        this.app.use('/servicios', require('../routes/serviciosRoutes'))
        //manejo de errores
        this.app.use((req, res, next) => {
            return res.status(400).json({ msg: 'Error. Ruta no encontrada.' })
        })
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            next()
            return res.status(404).json({ msg: 'Error. Pagina no encontrada.' })
        })
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            next()
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