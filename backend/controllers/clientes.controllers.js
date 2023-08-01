import Clientes from "../models/Clientes";

export const getClientes = async (req, res) =>{
    try {
        const clientes = await Clientes.find();
        res.json(clientes)
    } catch (error) {
        res.status(400);
        res.send({message: "Estos clientes no se encuentran en nuestro registro"})
    }
};

export const getCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findOne({_id: req.params.id});
        res.json(cliente);
    } catch (error) {
        res.status(404);
        res.send({message: "Este cliente no existe en nuestro registro"})
    }
};

export const postClientes = async (req, res) => {
    try {
        const clientes = new Clientes(req.body);
        const nuevoCliente = await clientes.save();
        res.json(nuevoCliente)
    } catch (error) {
        res.status(404);
        res.send({message: "Este cliente no se puede guardar en nuestro registro"})
    }
};

export const deleteClientes = async (req, res) => {
    try {
        const clientes = await Clientes.deleteOne({_id: req.params.id});
        res.status(204).send
    } catch (error) {
        res.status(404);
        res.send({message: "Este cliente no se puede eliminar en nuestro registro"})
    }

};

export const putClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
        await clientes.save();
        res.json(clientes)
    } catch (error) {
        res.status(404);
        res.send({message: "Este cliente no se puede editar en nuestro registro"})
    }


}