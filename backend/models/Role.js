import { Schema, model } from 'mongoose';

const RoleSchema = Schema({
    rol: {
        type: String,
        required : [true, 'Rol is required']
    }
});

const Role = model('Role', RoleSchema);

export default Role;