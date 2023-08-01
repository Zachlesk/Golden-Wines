import Inventario from '../models/Inventario.js';

export const getInventarios = async (req, res) => {
    const inventarios = await Inventario.find();
    res.json(inventarios);
}

export const getInventario = async (req, res) => {
    try {
        const inventario = await Inventario.findOne({_id:req.params.id});
        res.send(inventario); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este inventario no está en nuestro registro"});
    }
    
}

export const postInventarios = async (req, res) => {
    try {
        const inventarios = new Inventario(req.body);
        const nuevoInventario = await inventarios.save();
        res.json(nuevoInventario);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el inventario a nuestro registro"})
    }
}

export const deleteInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.deleteOne({_id:req.params.id});
        res.status(204).send
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este inventario"})
    }
}

export const putInventarios = async (req, res) => { 
    try {
        const inventarios = await Inventario.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});
        await inventarios.save();
        res.json(inventarios);
    } catch (error) {
        res.status(404);
        res.send({error: "Este inventario no existe en nuestro registro"})
    }

}