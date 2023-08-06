import Vinedos from '../models/Vinedos.js';

export const getVinedos = async (req, res) => {
    try {
        const vinedos = await Vinedos.find();
        res.json(vinedos);
    } catch (error) {
        res.status(404);
        res.send({error: "Estos viñedos no está en nuestro registro"});
    }
};

export const getVinedo = async (req, res) => {
    try {
        const vinedo = await Vinedos.findOne({_id: req.params.id});
        res.json(vinedo);
    } catch (error) {
        res.status(404);
        res.send({error: "Este viñedo no está en el registro"});
    }
};

export const postVinedos = async (req, res) => {
    try {
        const vinedos = new Vinedos(req.body);
        const nuevoVinedo = await vinedos.save();
        res.json(nuevoVinedo);
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo adjuntar el viñedo a nuestro registro"});
    }
};

export const deleteVinedos = async (req, res) => {
    try {
        const vinedos = await Vinedos.deleteOne({_id: req.params.body});
        res.status(204).send
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo eliminar el viñedo seleccionado"});
    }
};

export const putVinedos = async (req, res) => {
    try {
        const vinedos = await Vinedos.findOneAndUpdate(
            {_id: req.params.body},
            req.body,
            {new: true}
        )
        await vinedos.save();
        res.json(vinedos);
    } catch (error) {
        res.status(404);
        res.send({error: "No se pudo editar el viñedo seleccionado"});
    }


}