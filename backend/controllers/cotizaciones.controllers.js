import Cotizaciones from "../models/Cotizaciones";

export const getCotizaciones = async (req, res)=>{
    try {
        const cotizaciones = await Cotizaciones.find();
        res.json(cotizaciones);
    } catch (error) {
        res.status(400);
        res.send({message: "No se pudieron obtener las cotizaciones"})
    }
}

export const getCotizacion = async (req, res)=>{
    try {
        const cotizacion = await Cotizaciones.findOne({_id:req.params.id});
        res.json(cotizacion);
    } catch (error) {
        res.status(400);
        res.send({message: "No se pudo obtener esta cotizacion"});
    }

}

export const postCotizaciones = async (req,res)=>{
    try {
        const cotizacion = new Cotizaciones(req.body);
        const NuevaCotizacion = await cotizacion.save();
        res.json(NuevaCotizacion)
    } catch (error) {
        res.status(400);
        res.send({message: "No se pudo agregar esta cotizacion a nuestro registro"})
    }
}

export const deleteCotizaciones = async (req,res)=>{
    try {
        const cotizaciones = await cotizaciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(400);
        res.send({message: "No se pudo eliminar esta cotizacion en nuestro registro"})

    }
}

export const putCotizaciones = async (req, res)=>{
    try {
        const cotizaciones = await Cotizaciones.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}

        )
        await cotizaciones.save();
        res.json(cotizaciones)
    } catch (error) {
        res.status(400);
        res.send({message: "No se pudo editar esta cotizacion en nuestro registro"})
    }
}