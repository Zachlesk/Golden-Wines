import mongoose from "mongoose";

const vinoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true,'Name is required'],
        trim: true
    },
    imagen: {
        type: String,
    },
    edad: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    cepa: {
        type: String,
        required: true,
        trim: true,
    },
    nivelesAzucar: {
        type: String,
        required: true,
        trim: true
    },
    gasCarbonico: {
        type: String,
        required: true,
        trim: true
    },
    crianza: {
        type: String,
        required: true,
        trim: true
    },
    metodoElaboracion: {
        type: String,
        required: true,
        trim: true
    }
    },
    {
        timestamps: true,
    }
    );

const Vinos = mongoose.model('vinos', vinoSchema);

export default Vinos;