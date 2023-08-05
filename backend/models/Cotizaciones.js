import mongoose from 'mongoose';

const CotizacionesSchema = mongoose.Schema({
    cliente:{
        type: String,
        required: true,
        trim: true,
    },
    pedido: {
        type: String,
        required: true,
        trim: true,
    },
    fechaCotizacion: {
        type: String,
        required: true,
        trim: true
    },
    horaCotizacion: {
        type: String,
        required: true,
        trim: true
    },
    validoHasta: {
        type: String,
        required: true,
        trim: true
    },
    estadoCotizacion: {
        type: String,
        required: true,
        trim: true
    },
    totalCotizacion: {
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