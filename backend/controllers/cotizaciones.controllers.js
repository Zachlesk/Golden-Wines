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
        
    } catch (error) {
        
    }

}