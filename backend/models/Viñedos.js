import mongoose from "mongoose";

const ViñedoSchema = mongoose.Schema({
    nombreViñedo: {
        type: String,
        required: true,
        trim: true
    },
    descripcionViñedo: {
        type: String,
        required: true,
        trim: true
    },
    ubicacionViñedo: {
        type: String,
        required: true,
        trim: true
    },
    añoFundacionViñedo: {
        type: String,
        required: true,
        trim:true
    },
    especializacionViñedo: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
});

const Viñedo = mongoose.model('viñedos', ViñedoSchema);

export default Viñedo;