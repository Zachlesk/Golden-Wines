import mongoose from 'mongoose';

const ProductosSchema = mongoose.Schema({
    nombreProducto: {
        type: String,
        required: true,
        trim:true
    },
    descripcionProducto: {
        type: String,
        required: true,
        trim:true
    },
    precioCompraUnidad: {
        type: String,
        required: true,
        trim: true
    },
    precioVentaUnidad: {
        type: String,
        required: true,
        trim: true
    },
    fechaAdquisicion: {
        type: String,
        required: true,
        trim: true
    },
    fechaVencimiento: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Productos = mongoose.model('productos', ProductosSchema);

export default Productos;