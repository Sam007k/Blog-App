import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSercret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

}

export const getAuthSession = () => getServerSession(authOptions);