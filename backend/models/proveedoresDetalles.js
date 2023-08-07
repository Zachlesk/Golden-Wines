import mongoose from "mongoose";

const proveedoresDetallesSchema = mongoose.Schema({
    descripcionProveedor:{
        type:String,
        required:true,
        trim:true
    },
    calificacionProveedor:{
        type:String,
        required:true,
        trim:true
    },
    cataProveedor:{
        type:String,
        required:true,
        trim:true
    },
    numeroBodegas:{
        type:Number,
        requiredd:true,
        trim:true
    },
    categoriaProductos:{
        type:String,
        required:true,
        trim:true
    },
    proveedor:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'proveedores', 
        required: true 
    }
})

const proveedorDetalles = mongoose.model("proveedoresDetalles", proveedoresDetallesSchema);

export default proveedorDetalles;