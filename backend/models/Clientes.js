import mongoose from "mongoose";

const ClientesSchema = mongoose.Schema({
    nombreCliente:{
        type: String,
        required: true,
        trim: true
    },
    apellidoCliente: {
        type: String,
        required: true,
        trim: true
    },
    emailCliente:{
        type: String,
        required: true,
        trim: true
    },
    passwordCliente:{
        type: String,
        required: true,
        trim: true
    },
    direccionCliente:{
        type: String,
        required: true,
        trim: true
    },
    barrioCliente: {
        type: String,
        required: true,
        trim: true
    }
},
{
    trimstamps: true,
}
);

const Clientes = mongoose.model('clientes', ClientesSchema);
export default Clientes;