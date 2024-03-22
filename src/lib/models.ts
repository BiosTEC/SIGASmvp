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
            jan: { type: Number, required: false, unique: false },
            fev: { type: Number, required: false, unique: false },
            mar: { type: Number, required: false, unique: false },
            abr: { type: Number, required: false, unique: false },
            mai: { type: Number, required: false, unique: false },
            jun: { type: Number, required: false, unique: false },
            jul: { type: Number, required: false, unique: false },
            ago: { type: Number, required: false, unique: false },
            set: { type: Number, required: false, unique: false},
            out: { type: Number, required: false, unique: false },
            nov: { type: Number, required: false, unique: false },
            dez: { type: Number, required: false, unique: false }
        },
        consumo: {
            jan: { type: Number, required: false, unique: false },
            fev: { type: Number, required: false, unique: false },
            mar: { type: Number, required: false, unique: false },
            abr: { type: Number, required: false, unique: false },
            mai: { type: Number, required: false, unique: false },
            jun: { type: Number, required: false, unique: false },
            jul: { type: Number, required: false, unique: false },
            ago: { type: Number, required: false, unique: false },
            set: { type: Number, required: false, unique: false },
            out: { type: Number, required: false, unique: false },
            nov: { type: Number, required: false, unique: false },
            dez: { type: Number, required: false, unique: false }
        },
        excedente: {
            jan: { type: Number, required: false, unique: false },
            fev: { type: Number, required: false, unique: false },
            mar: { type: Number, required: false, unique: false },
            abr: { type: Number, required: false, unique: false },
            mai: { type: Number, required: false, unique: false },
            jun: { type: Number, required: false, unique: false },
            jul: { type: Number, required: false, unique: false },
            ago: { type: Number, required: false, unique: false },
            set: { type: Number, required: false, unique: false },
            out: { type: Number, required: false, unique: false },
            nov: { type: Number, required: false, unique: false },
            dez: { type: Number, required: false, unique: false }
        },
    },
    { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Produto = mongoose.models.Produto || mongoose.model('Produto', produtoSchema)
export const Energia = mongoose.models.Energia || mongoose.model('Energia', energiaSchema)