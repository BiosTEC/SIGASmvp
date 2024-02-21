import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth


//CONFIGURAÇÃO PADRÃO DO MIDDLEWARE
export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}