import { Energia } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

interface EnergiasRouteProps {
  params: {
    userId: string;
  };
}


export const GET = async (request: Request, { params }: EnergiasRouteProps) => {

  const { userId } = params //desestruturando userId

  try {
    connectToDb()
    const energia = await Energia.find({ userId })
    return NextResponse.json(energia)
  } catch (err) {
    console.log(err)
    throw new Error('Falha ao buscar as informações de energia')

  }
}