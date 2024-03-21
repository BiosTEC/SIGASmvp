import { Produto } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

interface ProdutosRouteProps {
  params: {
    userId: string;
  };
}


export const GET = async (request: Request, { params }: ProdutosRouteProps) => {

  const { userId } = params //desestruturando userId

  try {
    connectToDb()
    const produtos = await Produto.find({ userId })
    return NextResponse.json(produtos)
  } catch (err) {
    console.log(err)
    throw new Error('Falha ao buscar o Usuario')

  }
}