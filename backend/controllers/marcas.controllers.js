import Marcas from '../models/marcas.js';

export const getMarcas = async(req, res)=>{
    try {
        const marcas = await Marcas.find();
        res.json(marcas);
    } catch (error) {
        res.status(400);
        res.send({message: "No fue posible obtener las marcas en el sistema"});
    }
};

export const getMarca = async(req, res)=>{
    try {
        const marca = await Marcas.findOne({_id:req.params.id});
        res.json(marca);
    } catch (error) {
        res.status(400);
        res.send({message: "No fue posible obtener esta marca"})
    }
};

export const postMarcas = async (req, res) => {
    try {
        const marcas = new Marcas(req.body);
        const nuevaMarca = await marcas.save();
        res.json(nuevaMarca);
    } catch (error) {
        res.status(400);
        res.send({message: "No fue posible adjuntar esta marca a nuestro registro"})
    }

};

export const deleteMarcas = async (req, res) => {
    try {
        const marcas = await Marcas.deleteOne({_id: req.params.id});
        res.status(204).send
    } catch (error) {
        res.status(400);
        res.send({message: "No fue posible eliminar esta marca de nuestro registro"})
    }

};

export const putMarcas = async (req, res) => {
    try {
        const marcas = await Marcas.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        await marcas.save();
        res.json(marcas);
    } catch (error) {
        res.status(400);
        res.send({message: "No fue posible editar esta marca de nuestro registro"})
    }

}