import Productos from '../models/Productos.js';

export const getProductos = async (req, res) => {
    const productos = await Productos.find();
    res.json(productos);
}

export const getProducto = async (req, res) => {
    try {
        const producto = await Productos.findOne({_id:req.params.id});
        res.send(producto); 
    } catch (error) {
        res.status(404);
        res.send({error: "Este producto no está en nuestro registro"});
    }
    
}

export const postProductos = async (req, res) => {
    try {
        const productos = new Productos(req.body);
        const nuevoProductos = await productos.save();
        res.json(nuevoProductos);
    } catch (error) {
        res.send(400);
        res.send({error: "No se pudo adjuntar el producto a nuestro registro"})
    }
}

export const deleteProductos = async (req, res) => {
    try {
        const productos = await Productos.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(400);
        res.send({error: "No se pudo eliminar este producto"})
    }
}

export const putProductos = async (req, res) => { 
    try {
        const productos = await Productos.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true});

        await productos.save();
        res.json(productos);
    } catch (error) {
        res.status(404);
        res.send({error: "Este producto no se puede editar en nuestro registro"})
    }

}