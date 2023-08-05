import express from 'express';
import cors from 'cors';
import conexion from '../database/config.js';
import vinosRoutes from '../routes/vinos.routes.js';
import inventarioRoutes from '../routes/inventario.routes.js';
import viñedosRoutes from '../routes/viñedos.routes.js'; 
import marcasRoutes from '../routes/marcas.routes.js';
import facturacionesRoutes from '../routes/facturaciones.routes.js';
import cotizacionesRoutes from '../routes/cotizaciones.routes.js';
import pedidosRoutes from '../routes/pedidos.routes.js';
import productosRoutes from '../routes/productos.routes.js';
import proveedoresRoutes from '../routes/proveedor.routes.js';
import reseñasRoutes from '../routes/reseñas.routes.js';
import authRoutes from '../routes/auth.routes.js';
import usuariosRoutes from '../routes/usuario.routes.js';

export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath ='/auth/',
        this.vinosPath = '/vinos/';
        this.inventarioPath = '/inventario/';
        this.viñedosPath = '/viñedos/';
        this.marcasPath = '/marcas/';
        this.facturacionPath = '/facturaciones/';
        this.cotizacionesPath = '/cotizaciones/';
        this.pedidosPath = '/pedidos/';
        this.productosPath = '/productos/';
        this.proveedorPath = '/proveedores/';
        this.reseñasPath = '/reseñas/';
        this.usuariosPath = '/usuarios/',
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
        this.app.use(this.authPath, authRoutes);
        this.app.use(this.usuariosPath, usuariosRoutes);
        this.app.use(this.vinosPath, vinosRoutes);
        this.app.use(this.inventarioPath, inventarioRoutes);
        this.app.use(this.viñedosPath, viñedosRoutes);
        this.app.use(this.marcasPath, marcasRoutes);
        this.app.use(this.facturacionPath, facturacionesRoutes);
        this.app.use(this.cotizacionesPath,cotizacionesRoutes);
        this.app.use(this.pedidosPath, pedidosRoutes);
        this.app.use(this.productosPath, productosRoutes);
        this.app.use(this.proveedorPath, proveedoresRoutes);
        this.app.use(this.reseñasPath, reseñasRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`El server está activo en el puerto ${this.port}`);;
        });
    }
}