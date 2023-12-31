import mongoose from 'mongoose';

const InventarioSchema = mongoose.Schema({

    producto: {
        type: String,
        required: true,
        trim: true
    },
    cantidadInventario: {
        type: String,
        required: true,
        trim: true
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

const Inventario = mongoose.model('inventarios', InventarioSchema);

export default Inventario;