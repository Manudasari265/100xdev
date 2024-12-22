import NextAuth from 'next-auth';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                const user = {
                    name: "john smith",
                    id: 1,
                    username: "jsmith@gmail.com"
                }

                if(user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
})
