import express from "express";
import db from '../db/connection.js';
import usuarioRoutes from '../routes/usuario.js'
import homeRoutes from '../routes/home.js'
import { create } from 'express-handlebars';
import * as helpers from "../lib/helpers.js";
 
class Server {
    constructor(__dirname) {
        this.__dirname=__dirname
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.apiPaths = {
            usuarios: '/api/usuario',
            home: '/'
        }

        // Vamos a definir e iniciar nuestros metodos
        console.log('Iniciando el servidor constructor');
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection() {
        try {
            // await db.authenticate();
            await db.sync();

            console.log('Database online');

        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        const hbs = create({
            // Integración de helper.
            helpers,
            // Utilizar varios directorios o parciales.
            partialsDir: [
                "views/partials/"
            ]
        });

        // Configurar el motor de plantilla, para esto debemos usar el método “engine”,
        // el cual define el motor de plantillas que utilizaremos en nuestro servidor con Express.
        this.app.engine("handlebars", hbs.engine);

        // Se especifica al motor que reconozca la extensión handlebars
        this.app.set("view engine", "handlebars");
        
        console.log(this.__dirname)
        this.app.use(express.json());
        this.app.use(express.static(this.__dirname +'public'));
        this.app.use('/bootstrap', express.static(this.__dirname + '/node_modules/bootstrap/dist/css'))
        this.app.use('/bootstrapJs', express.static(this.__dirname + '/node_modules/bootstrap/dist/js'))
        this.app.use('/axios', express.static(`${this.__dirname}/node_modules/axios/dist`));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, usuarioRoutes)
        this.app.use(this.apiPaths.home, homeRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
 
        })
    }
}


export default Server;