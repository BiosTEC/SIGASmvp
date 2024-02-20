'use server'
import { revalidatePath } from "next/cache"
import { Produto } from "./models"
import { connectToDb } from "./utils"

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

