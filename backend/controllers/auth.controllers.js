import response from 'express';
import Usuario  from '../models/Usuario.js';
import bcryptjs from 'bcryptjs';
import { generateJWT } from '../helpers/generate.JWT.js';


export const login = async (req, res=response)=>{

    const {email, password} = req.body;
    try {


        const usuario = await Usuario.findOne({email});

        if (!usuario){
            return res.status(400).json({
                msg:"Este usuario no es correcto"
            })
        }

        if (!usuario.estado){
            return res.status(400).json({
                msg:"El estado del usuario es inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword){
            res.json({ 
                message: 'Este usuario es invalido' }); 
        }

        const token = await generateJWT(usuario.id)

        res.json({
           usuario,
           token,
           success: true,
           message: 'El usuario es valido'
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Contacte al servicio tecnico"
        })
    }
}
