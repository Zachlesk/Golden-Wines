import mongoose from 'mongoose';

const CotizacionesSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    celular: {
        type: String,
        required: true,
        trim: true,
    },
    fechaCotizacion: {
        type: String,
        required: true,
        trim: true
    },
    correoElectronico: {
        type: String,
        required: true,
        trim: true
    },
    vinoInteresado: {
        type: String,
        required: true,
        trim: true
    },
    comentarios: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}
);

const Cotizaciones = mongoose.model('cotizaciones', CotizacionesSchema)

export default Cotizaciones