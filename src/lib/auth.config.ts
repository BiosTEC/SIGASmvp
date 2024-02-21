//Lidando com as rotas de forma externa pois middleware é independente de libs e estamos usando Mongoose, bcrypt e etc...
type AuthorizedTypes = {
    auth?: any,
    request?: any
}


export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        //adicionando dados do usuário na sessão
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.id = user.id
                token.isAdmin = user.isAdmin
                token.email = user.email
                token.username = user.username
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            if (token) {
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
                session.user.email = token.email
                session.user.username = token.username
            }
            return session
        },

        authorized({ auth, request }: AuthorizedTypes) {
            //condições que permitem a navegação antes e após o login
            const user = auth?.user
            // const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
            const isOnDashboard = request.nextUrl?.pathname.startsWith('/dashboard')
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
            const isOnRegistrarPage = request.nextUrl?.pathname.startsWith('/registrar')
            console.log(auth)
            //SO ADMIN
            // if (isOnAdminPanel && !user?.isAdmin) {
            //     return false
            // }
            //SO USUARIO LOGADOS
            if (isOnDashboard && !user) {
                return false
            }
            //SO USUARIOS DESLOGADOS
            if (isOnLoginPage && user || isOnRegistrarPage && user) {
                return Response.redirect(new URL('/', request.nextUrl))
            }
            return true
        }
    }
}