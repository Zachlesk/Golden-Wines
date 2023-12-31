import mongoose from "mongoose";

const vinoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true,'Name is required'],
        trim: true
    },
    imgUrl: {
        type: String,
    },
    valor: {
        type: String,
        required: true,
        trim: true
    },
    gradosAlcohol: {
        type: String,
        required: true,
        trim: true
    },
    cata: {
        type: String,
        required: true,
        trim: true
    },
    cepa: {
        type: String,
        required: true,
        trim: true,
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    pais: {
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

    vinoSchema.methods.setImgUrl = (filename)=>{
        this.imgUrl = `${process.env.HOST}:${process.env.PORT}/public/${filename}`;
    }

const Vinos = mongoose.model('vinos', vinoSchema);

export default Vinos;