import mongoose from 'mongoose';

const FacturacionesSchema = mongoose.Schema({
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    pedido: {
        type: String,
        required: true,
        trim: true
    },
    fechaFactura: {
        type: String,
        required: true,
        trim: true
    },
    horaFactura: {
        type: String,
        required: true,
        trim: true
    },
    totalFactura: {
        type: String,
        required: true,
        trim: true
    },
    metodoPagoFactura: {
        type: String,
        required: true,
        trim: true
    },
    estadoFactura: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
});

const Facturaciones = mongoose.model('facturaciones', FacturacionesSchema);

export default Facturaciones