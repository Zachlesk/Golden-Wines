import Viñedos from '../models/Viñedos.js';

export const getViñedos = async (req, res) => {
    try {
        const viñedos = await Viñedos.find();
        res.json(viñedos);
    } catch (error) {
        res.status(404);
        res.send({error: "Estos viñedos no está en nuestro registro"});
    }
};

export const getViñedo = async (req, res) => {
    try {
        const viñedo = await Viñedos.findOne({_id: req.params.id});
        res.json(viñedo);
    } catch (error) {
        res.status(404);
        res.send({error: "Este viñedo no está en el registro"});
    }
};

export const postViñedos = async (req, res) => {
    try {
        const viñedos = new Viñedos(req.body);
        const nuevoViñedo = await viñedos.save();
        res.json(nuevoViñedo);
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo adjuntar el viñedo a nuestro registro"});
    }
};

export const deleteViñedos = async (req, res) => {
    try {
        const viñedos = await Viñedos.deleteOne({_id: req.params.body});
        res.status(204).send
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo eliminar el viñedo seleccionado"});
    }
};

export const putViñedos = async (req, res) => {
    try {
        const viñedos = await Viñedos.findOneAndUpdate(
            {_id: req.params.body},
            req.body,
            {new: true}
        )
        await viñedos.save();
        res.json(viñedos);
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo editar el viñedo seleccionado"});
    }


}