import mongoose from 'mongoose';

const PedidosSchema = mongoose.Schema({
    cliente: {
        type: String,
        required: true,
        trim:true
    },
    suministrador: {
        type: String,
        required: true,
        trim:true
    },
    facturacion: {
        type: String,
        required: true,
        trim: true
    },
    cotizacion: {
        type: String,
        required: true,
        trim: true
    },
    horaPedido: {
        type: String,
        required: true,
        trim: true
    },
    totalPedido: {
        type: String,
        required: true,
        trim: true
    },
    estadoPedido: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Pedidos = mongoose.model('pedidos', PedidosSchema);

export default Pedidos;