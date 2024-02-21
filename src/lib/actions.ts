'use server'
import { revalidatePath } from "next/cache"
import { Produto, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"

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
export const deleteProduto = async (formData: any) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb()

        await Produto.findByIdAndDelete(id)
        console.log('Produto deletado do banco de dados')
        revalidatePath('/mercado')
    } catch (err) {
        console.log(err)
        return { error: 'Erro, algo de errado aconteceu.' }
    }

}

export const handleGoogleLogin = async () => {
    await signIn('google')
}
export const handleLogout = async () => {
    await signOut()
}

export const cadastrar = async (formData: any) => {

    const { username, nomeEmpreendimento, cpfCnpj, telefone, email, password, img, passwordRepeat }
        = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return 'Repita a senha corretamente'
    }
    try {
        connectToDb()
        const user = await User.findOne({ username })
        if (user) {
            return 'Usuário já existe'
        }


        const newUser = new User({
            username,
            nomeEmpreendimento,
            cpfCnpj,
            telefone,
            email,
            password,
            img
        })
        await newUser.save()
        console.log('Usuário salvo no bando de dados')

    } catch (err) {
        console.log(err)
        return { error: 'Algumo não esta correto.' }

    }

}



