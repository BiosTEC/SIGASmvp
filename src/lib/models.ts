import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    nomeEmpreendimento: { type: String, required: true },
    cpfCnpj: { type: String, required: true },
    telefone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Adicionado novamente






})