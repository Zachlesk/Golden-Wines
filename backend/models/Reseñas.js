import mongoose from 'mongoose';

const ReseñasSchema = mongoose.Schema({
    cliente: {
        type: String,
        required: true,
        trim:true
    },
    vino: {
        type: String,
        required: true,
        trim:true
    },
    comentarioReseña: {
        type: String,
        required: true,
        trim: true
    },
    puntuacionReseña: {
        type: String,
        required: true,
        trim: true
    },
    fechaReseña: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true, 
}
);

const Reseñas = mongoose.model('reseñas', ReseñasSchema);

export default Reseñas;