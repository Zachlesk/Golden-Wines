import e from 'express';
import mongoose from 'mongoose';

const marcasSchema = mongoose.Schema({
    nombreMarca: {
        type: String,
        required: true,
        trim:true
    },
    tipoEstablecimiento: {
        type: String,
        required: true,
        trim:true
    },
    especialidadMarca: {
        type: String,
        required: true,
        trim: true
    },
    contactoMarca: {
        type: String,
        required: true,
        trim: true
    },
    correoMarca: {
        type: String,
        required: true,
        trim: true
    },
    ubicacionMarca: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Marcas = mongoose.model('marcas', marcasSchema);

export default Marcas;