import Facturaciones from '../models/Facturaciones.js';

export const getFacturaciones = async (req, res) => {
    const facturaciones = await Facturaciones.find();
    res.json(vinos);
}

export const getFacturacion = async (req, res) => {
    try {
        const facturacion = await Facturaciones.findOne({_id:req.params.id});
        res.send(facturacion); 
    } catch (error) {
        res.status(404);
        res.send({error: "Esta facturación no está en nuestro registro"});
    }

}

export const postFacturaciones = async (req, res) => {
    try {
        const facturaciones = new Facturaciones(req.body);
        const nuevaFacturacion = await facturaciones.save();
        res.json(nuevaFacturacion);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar la facturación a nuestro registro"})
    }
}

export const deleteFacturaciones = async (req, res) => {
    try {
        const vinos = await Facturaciones.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar esta facturacion"})
    }
}

export const putFacturaciones = async (req, res) => { 
    try {
        const vinos = await Facturaciones.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await vinos.save();
        res.json(vinos);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta facturación no existe en nuestro registro"})
    }

}