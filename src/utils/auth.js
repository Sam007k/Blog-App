import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSercret: process.env.GOOGLE_SECRET || '',
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSercret: process.env.GITHUB_SECRET || '',
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

}

// export const getAuthSession = () => getServerSession(authOptions);