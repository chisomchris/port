import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch(process.env.API_BASE_URL + '/login', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })

                const user = await res.json()
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async (token, user) => {
            return { ...token, ...user };
        },

        session: async (session, token) => {
            return { ...session, ...token };
        },
    },

    session: {
        strategy: "jwt",
    },
};