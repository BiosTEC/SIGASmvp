import { User } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

interface UserRouteProps {
  params: {
    email: string;
  };
}


export const GET = async (request: Request, { params }: UserRouteProps) => {

  const { email } = params //desestruturando email

  try {
    connectToDb()
    const user = await User.findOne({ email })
    return NextResponse.json(user)
  } catch (err) {
    console.log(err)
    throw new Error('Falha ao buscar o Usuario')

  }
}