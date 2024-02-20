const { default: mongoose } = require('mongoose')

interface ConnectionObject {
    isConnected?: number; // é possível usar boolean se necessário
}

const connection: ConnectionObject = {};
export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('usando conexao')
            return
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
}





















// const connection: ConnectionObject = {}

// export const connectToDb = async () => {
//     try {
//         if (connection.isConnected) {
//             console.log('Usando conexão existente')
//             return
//         }
//         const mongoURI = process.env.MONGO
//         if (!mongoURI) {
//             throw new Error("URL do MongoDB não esta definida nas variáveis de ambiente.")
//         }
//         const db = await mongoose.connect(mongoURI);
//         connection.isConnected = db.connections[0].readyState
//     } catch (error) {
//         console.log(error)
//         throw new Error(error as string)
//     }
// }







