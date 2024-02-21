import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from 'bcrypt'


const login = async (credentials: any) => {
    try {
        connectToDb()
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
            throw new Error('Dados Errados')
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordCorrect) {
            throw new Error('Dados Errados')
        }
        return user
    } catch (err) {
        console.log(err)
        throw new Error('Falha ao entrar.')
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({

    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (err) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn(params) {
            const { user, account, profile } = params;
            console.log(user, account, profile);
            if (account?.provider === 'google') {
                connectToDb()
                try {
                    const user = await User.findOne({ email: profile?.email })
                    if (!user) {
                        const newUser = new User({
                            username: profile?.name,
                            email: profile?.email,
                            img: profile?.picture,
                        })
                        await newUser.save()
                    }
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
            return true;
        }
    }
})