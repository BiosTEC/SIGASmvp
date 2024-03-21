import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        nomeEmpreendimento: { type: String, required: false, },
        cpfCnpj: { type: String, required: false, },
        telefone: { type: String, required: false, },
        email: { type: String, required: true, unique: true, },
        password: { type: String, required: false, },
        img: { type: String, },
        isAdmin: { type: Boolean, default: true, }
    },
    { timestamps: true }
)
const produtoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: String, },
        userId: { type: String, required: true, },
        slug: { type: String, required: true, unique: true },
        createdAt: { type: Date },
    },
    { timestamps: true }
)
const energiaSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, },
        geracao: {
            jan: { type: Number, required: false },
            fev: { type: Number, required: false },
            mar: { type: Number, required: false },
            abr: { type: Number, required: false },
            mai: { type: Number, required: false },
            jun: { type: Number, required: false },
            jul: { type: Number, required: false },
            ago: { type: Number, required: false },
            set: { type: Number, required: false },
            out: { type: Number, required: false },
            nov: { type: Number, required: false },
            dez: { type: Number, required: false }
        },
        consumo: {
            jan: { type: Number, required: false },
            fev: { type: Number, required: false },
            mar: { type: Number, required: false },
            abr: { type: Number, required: false },
            mai: { type: Number, required: false },
            jun: { type: Number, required: false },
            jul: { type: Number, required: false },
            ago: { type: Number, required: false },
            set: { type: Number, required: false },
            out: { type: Number, required: false },
            nov: { type: Number, required: false },
            dez: { type: Number, required: false }
        },
    },
    { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Produto = mongoose.models.Produto || mongoose.model('Produto', produtoSchema)
export const Energia = mongoose.models.Energia || mongoose.model('Energia', energiaSchema)