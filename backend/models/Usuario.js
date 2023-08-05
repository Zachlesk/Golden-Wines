import { Schema, model } from 'mongoose';

const UsuarioSchema = Schema({
    nombre :{
        type:String,
        required: [true, 'Name is required']
    },

    email :{
        type:String,
        required: [true, 'Email is required'],
        unique:true
    }, 
    password :{
        type:String,
        required: [true, 'Password is required']
    },
    rol :{
        type:String,
        required: true,
        default: 'USER'
    },
    estado :{
        type:Boolean,
        default: true
    }
});

const Usuario = model('usuarios', UsuarioSchema);

export default Usuario;