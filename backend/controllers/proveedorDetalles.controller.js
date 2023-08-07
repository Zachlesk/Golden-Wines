import proveedorDetalles from "../models/proveedoresDetalles.js";
import mongoose from "mongoose";

const getProveedoresDetallesAll = async (req, res) => {
    try {
        const datos = await proveedorDetalles.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const getProveedorDetallesOne = async (req, res) => {
    try {
        const proveedorId = new mongoose.Types.ObjectId(req.params.id);
        console.log(proveedorId);
        const datos = await proveedorDetalles.find({proveedor:proveedorId});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postProveedoresDetalles = async (req, res) => {
    try {
        const fechasBody = new proveedorDetalles(req.body);
        const nuevaFecha = await fechasBody.save();
        res.json(nuevaFecha);
    } catch (error) {
        console.log(error);
    }
}

export {
    getProveedorDetallesOne,
    postProveedoresDetalles,
    getProveedoresDetallesAll
}