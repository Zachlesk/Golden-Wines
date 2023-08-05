import { response } from 'express';
import { ObjectId } from 'mongoose';

import  Usuario  from '../models/Usuario.js';

const allowedCollections = [
    'usuarios',
    'categorias'
]

export const searchUsers = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); // TRUE 

    if ( isMongoID ) {
        const usuario = await Usuario.findById(criterio);
        return res.json({
            results: ( usuario ) ? [ usuario ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const usuarios = await Usuario.find({
        $or: [{ nombre: regex }, { email: regex }],
        $and: [{ estado: true }]
    });

    res.json({
        results: usuarios
    });

}


export const search = ( req, res = response ) => {
    
    const { coleccion, criterio  } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion) {
        case 'usuarios':
            searchUsers(criterio, res);
        break;
        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }

  

}

