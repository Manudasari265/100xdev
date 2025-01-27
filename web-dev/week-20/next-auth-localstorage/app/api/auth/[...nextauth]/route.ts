/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "manoj@gmail.com"},
                password: { label: "Password", type: "password", placeholder: "********"}
            },

            async authorize(credentials) {
                const username = credentials?.username;
                const password = credentials?.password;

                // db request to check if this username and password are valid
                const user = {
                    name: "manoj",
                    id: "1",
                    email: "manoj@gmail.com"
                }
                if(user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST } 