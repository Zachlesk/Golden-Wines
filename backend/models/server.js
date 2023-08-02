import express from 'express';
import cors from 'cors';
import conexion from '../database/config.js';
import vinosRoutes from '../routes/vinos.routes.js';
import inventarioRoutes from '../routes/inventario.routes.js';
import viñedosRoutes from '../routes/viñedos.routes.js'; 
import marcasRoutes from '../routes/marcas.routes.js';
import facturacionesRoutes from '../routes/facturaciones.routes.js';
import cotizacionesRoutes from '../routes/cotizaciones.routes.js';

export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.vinosPath = '/vinos/';
        this.inventarioPath = '/inventario/';
        this.viñedosPath = '/viñedos/';
        this.marcasPath = '/marcas/';
        this.facturacionPath = '/facturaciones/';
        this.cotizacionesPath = '/cotizaciones/';
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
        this.app.use(this.inventarioPath, inventarioRoutes);
        this.app.use(this.viñedosPath, viñedosRoutes);
        this.app.use(this.marcasPath, marcasRoutes);
        this.app.use(this.facturacionPath, facturacionesRoutes);
        this.app.use(this.cotizacionesPath,cotizacionesRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`El server está activo en el puerto ${this.port}`);;
        });
    }
}