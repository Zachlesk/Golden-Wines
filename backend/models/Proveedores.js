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
    contactoProveedor: {
        type: String,
        required: true,
        trim: true
    },
    ubicacionProveedor: {
        type: String,
        required: true,
        trim: true
    },
    especialidadProveedor: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Proveedores = mongoose.model('proveedores', ProveedoresSchema);

export default Proveedores;