import Usuario from '../models/Usuario.js';
import bcryptjs from 'bcryptjs';

export const getUsers = async(req, res)=>{
    const { hasta, desde } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        usuarios
    });
}

export const postUsers = async (req, res)=>{

    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});

    const existeEmail = await Usuario.findOne({email});
    
    if(existeEmail){
        return res.status(400).json({
            msg: 'Email already exists'
        })
    }


    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    
    await usuario.save();
    res.json({
        "message":"post api",
        usuario
    })
}

export const deleteUsers = async (req, res)=>{

    const {id} = req.params
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json(usuario)
}

export const putUsers = async (req, res)=>{

    const { id } = req.params;
    const { _id, password, ...resto } = req.body;

    if ( password ) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }
    const usuario = await Usuario.findByIdAndUpdate( id, resto, {new: true} );

    res.json({
        msg:"El usuario ha sido actualizado",
        usuario : usuario
    });
}

export const patchUsers = (req, res)=>{
    res.json({
        "message":"patch api"
    })
}

