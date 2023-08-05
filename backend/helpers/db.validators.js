import Role from '../models/Role.js'
import Usuario from '../models/Usuario.js'

export const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

export const emailExiste = async(email = '' ) => {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }

export const userExistsById = async(id) => {

    const userExists = await Usuario.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${id}`);
    }
}

