import Vinos from '../models/Vinos.js';

export const getVinos = async (req, res) => {
    const vinos = await Vinos.find();
    res.json(vinos);
}

export const getVino = async (req, res) => {
    try {
        const vinos = await Vinos.findOne({_id:req.params.id});
        res.send(vinos); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este vino no está en nuestro registro"});
    }
    
}

export const postVinos = async (req, res) => {
    try {
        const vinos = new Vinos(req.body);
        const nuevoVino = await vinos.save();
        res.json(nuevoVino);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el vino a nuestro registro"})
    }
}

export const deleteVinos = async (req, res) => {
    try {
        const vinos = await Vinos.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este vino"})
    }
}

export const putVinos = async (req, res) => { 
    try {
        const vinos = await Vinos.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await vinos.save();
        res.json(vinos);
    } catch (error) {
        res.status(404);
        res.send({error: "Este vino no existe en nuestro registro"})
    }

}