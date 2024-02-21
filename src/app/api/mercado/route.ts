import { Produto } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"




export const GET = async (request: Request) => {

    try {
        connectToDb()
        const produtos = await Produto.find()
        return NextResponse.json(produtos)

    } catch (err) {
        console.log(err)
        throw new Error('Falha ao buscar os produtos')

    }
}