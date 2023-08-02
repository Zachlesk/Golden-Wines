import Reseñas from '../models/Reseñas.js';

export const getReseñas = async (req, res) => {
    const reseñas = await Reseñas.find();
    res.json(reseñas);
}

export const getReseña = async (req, res) => {
    try {
        const reseña = await Reseñas.findOne({_id:req.params.id});
        res.send(reseña); 
    } catch (error) {
        res.status(404);
        res.send({error: "Esta reseña no está en nuestro registro"});
    }
    
}

export const postReseñas = async (req, res) => {
    try {
        const reseñas = new Reseñas(req.body);
        const nuevaReseña = await reseñas.save();
        res.json(nuevaReseña);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar la reseña a nuestro registro"})
    }
}

export const deleteReseñas = async (req, res) => {
    try {
        const reseñas = await Reseñas.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar esta reseña"})
    }
}

export const putReseñas = async (req, res) => { 
    try {
        const reseñas = await Reseñas.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await reseñas.save();
        res.json(reseñas);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta reseña no existe en nuestro registro"})
    }

}