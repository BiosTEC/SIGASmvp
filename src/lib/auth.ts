import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import { connectToDb } from "./utils";
import { User } from "./models";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({

    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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