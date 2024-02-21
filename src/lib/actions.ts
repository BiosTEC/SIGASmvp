'use server'
import { revalidatePath } from "next/cache"
import { Produto, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcrypt'


export const addProduto = async (formData: any) => {
    const { title, desc, slug, userId, createdAt, img } = Object.fromEntries(formData) //desestruturizando os dados recebidos

    try {
        connectToDb()
        const newProduto = new Produto({ title, desc, slug, userId, createdAt, img })
        await newProduto.save()
        console.log('Produto salvo no banco de dados')
        revalidatePath('/mercado')
    } catch (err) {
        console.log(err)
        return { error: 'Erro, algo de errado aconteceu.' }
    }

}
// export const deleteProduto = async (formData: any) => {
//     const { id } = Object.fromEntries(formData)

//     try {
//         connectToDb()

//         await Produto.findByIdAndDelete(id)
//         console.log('Produto deletado do banco de dados')
//         revalidatePath('/mercado')
//     } catch (err) {
//         console.log(err)
//         return { error: 'Erro, algo de errado aconteceu.' }
//     }

// }

export const handleGoogleLogin = async (previousState: any, formData: any) => {
    await signIn('google')
}
export const handleLogout = async () => {
    await signOut()
}

export const cadastrar = async (previousState: any, formData: any) => {

    const { username, nomeEmpreendimento, cpfCnpj, telefone, email, password, img, passwordRepeat }
        = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return { error: 'Repita a senha corretamente' }
    }
    try {
        connectToDb()
        const user = await User.findOne({ username })
        if (user) {
            return { error: 'Usuário já existe' }
        }

        //CRIPTOGRAFIA DE SENHA
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            nomeEmpreendimento,
            cpfCnpj,
            telefone,
            email,
            password: hashedPassword,
            img
        })
        await newUser.save()
        console.log('Usuário salvo no bando de dados')
        return { success: true }

    } catch (err) {
        console.log(err)
        return { error: 'Algo não esta correto.' }

    }
}

export const login = async (previousState: any, formData: any) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn('credentials', { email, password })
    } catch (err: any) {
        console.log(err);
        if (err.message.includes('credentialssignin')) {
            return { error: 'E-mail ou senha inválidos' };
        }
        throw err
    }
}
export const handleExemplo = () => {

}


