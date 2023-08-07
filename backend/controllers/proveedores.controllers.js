import Proveedores from '../models/Proveedores.js';
import proveedorDetalles from "../models/proveedoresDetalles.js";

export const getProveedores = async (req, res) => {
    const proveedores = await Proveedores.find();
    res.json(proveedores);
}

export const insertarDoble = async (req, res) => {
    try {
        const data1 = new Proveedores(req.body.data1);
        const proveedoresDatos = await data1.save(); 
        const idRelativa = data1._id

        const data2 = new proveedorDetalles({...req.body.data2, proveedor: idRelativa})
        const proveedoresDetalleDatos = await data2.save();

        console.log(data1);
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}

export const putProveedores = async (req, res) => { 
    try {
        const id = req.params.id;
        const newData = req.body;
        const proveedorExist = await Proveedores.findById(id);
        const proveedorDetalleExist = await proveedorDetalles.findOne({ proveedor: id });
        const updateProveedores = await Proveedores.findByIdAndUpdate(id, { $set: newData.data1}, { new: true });
        const updateproveedorDetalles = await proveedorDetalles.findOneAndUpdate({ proveedor: id}, { $set: newData.data2 }, { new: true });
        res.json(proveedorExist,
            proveedorDetalleExist,
            updateProveedores,
            updateproveedorDetalles)
        
    } catch (error) {
        res.status(404);
        res.send({error: "Este proveedor no existe en nuestro registro"})
    }
}

export const getProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedores.findOne({_id:req.params.id});
        res.send(proveedor); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este vino no está en nuestro registro"});
    }
    
}

export const postProveedores = async (req, res) => {
    try {
        const proveedores = new Proveedores(req.body);
        const nuevoProveedor = await proveedores.save();
        res.json(nuevoProveedor);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el proveedor a nuestro registro"})
    }
}

export const deleteProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este proveedor"})
    }
}

