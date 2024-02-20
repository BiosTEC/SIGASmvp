import mongoose from "mongoose";

interface ConnectionObject {
    isConnected?: number; // é possível usar boolean se necessário
}

const connection: ConnectionObject = {}

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Usando conexão existente')
            return
        }
        const mongoURI = process.env.MONGO
        if (!mongoURI) {
            throw new Error("URL do MongoDB não esta definida nas variáveis de ambiente.")
        }
        const db = await mongoose.connect(mongoURI);
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
}









// import mongoose from "mongoose";


// export const connectToDb = async () => {
//     try {
//         const mongoURI = process.env.MONGO;

//         if (!mongoURI) {
//             throw new Error("URL do MongoDB não esta definida nas variáveis de ambiente.");
//         }

//         await mongoose.connect(mongoURI);
//     } catch (error) {
//         console.log(error);
//         throw new Error(error as string);
//     }
// }
