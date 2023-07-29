import mongoose from 'mongoose';

const InventarioSchema = mongoose.Schema({

    producto: {
        type: String,
        required: true,
        trim: true
    },
    cantidad: {
        type: String,
        required: true,
        trim: true
    },
    

})