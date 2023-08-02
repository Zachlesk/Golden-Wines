import Proveedores from '../models/Proveedores.js';

export const getProveedores = async (req, res) => {
    const proveedores = await Proveedores.find();
    res.json(proveedores);
}

export const getProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedores.findOne({_id:req.params.id});
        res.send(proveedor); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este vino no está en nuestro registro"});
    }
    
}

export const postProveedores = async (req, res) => {
    try {
        const proveedores = new Proveedores(req.body);
        const nuevoProveedor = await proveedores.save();
        res.json(nuevoProveedor);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el proveedor a nuestro registro"})
    }
}

export const deleteProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este proveedor"})
    }
}

export const putProveedores = async (req, res) => { 
    try {
        const proveedores = await Proveedores.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await proveedores.save();
        res.json(proveedores);
    } catch (error) {
        res.status(404);
        res.send({error: "Este proveedor no existe en nuestro registro"})
    }

}