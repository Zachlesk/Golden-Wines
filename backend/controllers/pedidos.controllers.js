import Pedidos from '../models/Pedidos.js';

export const getPedidos = async (req, res) => {
    const pedidos = await Pedidos.find();
    res.json(pedidos);
}

export const getPedido = async (req, res) => {
    try {
        const pedido = await Pedidos.findOne({_id:req.params.id});
        res.send(pedido); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este pedido no está en nuestro registro"});
    }
    
}

export const postPedidos = async (req, res) => {
    try {
        const pedidos = new Pedidos(req.body);
        const nuevoPedido = await pedidos.save();
        res.json(nuevoPedido);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el pedido a nuestro registro"})
    }
}

export const deletePedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este pedido"})
    }
}

export const putPedidos = async (req, res) => { 
    try {
        const pedidos = await Pedidos.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await pedidos.save();
        res.json(pedidos);
    } catch (error) {
        res.status(404);
        res.send({error: "Este pedido no existe en nuestro registro"})
    }

}