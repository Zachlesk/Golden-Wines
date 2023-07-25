import mongoose from "mongoose";

const conexion = async () => {
    try {
        const conexionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Has sido conectado exitosamente en el server ${conexionDB.connection.host} en el puerto ${conexionDB.connection.port}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default conexion;