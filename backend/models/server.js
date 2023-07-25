import express from 'express';
import cors from 'cors';
import conexion from '../database/config.js';
import vinosRoutes from '../routes/vinos.routes.js';

export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.vinosPath = '/vinos/';
        this.conexion();
        this.middlewares();
        this.routes();
    }

    async conexion(){
        await conexion();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.vinosPath, vinosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`El server está activo en el puerto ${this.port}`);;
        });
    }
}