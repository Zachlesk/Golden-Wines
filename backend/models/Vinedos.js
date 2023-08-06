import mongoose from "mongoose";

const VinedoSchema = mongoose.Schema({
    nombreVinedo: {
        type: String,
        required: true,
        trim: true
    },
    descripcionVinedo: {
        type: String,
        required: true,
        trim: true
    },
    ubicacionVinedo: {
        type: String,
        required: true,
        trim: true
    },
    añoFundacionVinedo: {
        type: String,
        required: true,
        trim:true
    },
    especializacionVinedo: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
});

const Vinedo = mongoose.model('vinedos', VinedoSchema);

export default Vinedo;