import { Produto } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

interface ProdutoRouteProps {
  params: {
    slug: string;
  };
}


export const GET = async (request: Request, { params }: ProdutoRouteProps) => {

  const { slug } = params //desestruturando slug

  try {
    connectToDb()
    const produto = await Produto.findOne({ slug })
    return NextResponse.json(produto)
  } catch (err) {
    console.log(err)
    throw new Error('Falha ao buscar os produto')

  }
}


//DELETAR PRODUTO
// export const DELETE = async (request: Request, { params }: ProdutoRouteProps) => {

//   const { slug } = params //desestruturando slug

//   try {
//     connectToDb()
//     await Produto.deleteOne({ slug })
//     return NextResponse.json('Produto deletado')
//   } catch (err) {
//     console.log(err)
//     throw new Error('Falha ao deletar o produto')

//   }
// }