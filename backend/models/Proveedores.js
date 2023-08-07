import mongoose from 'mongoose';

const ProveedoresSchema = mongoose.Schema({
    nombreProveedor: {
        type: String,
        required: true,
        trim:true
    },
    tipoProveedor: {
        type: String,
        required: true,
        trim:true
    },
    especialidadProveedor: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    ubicacion: {
        type: String,
        required:true,
        trim:true
    },
    numero: {
        type: String,
        required:true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Proveedores = mongoose.model('proveedores', ProveedoresSchema);

export default Proveedores;