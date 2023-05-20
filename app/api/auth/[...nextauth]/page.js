import NextAuth from "next-auth/next";
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
            try {
            const res = await fetch("/api/auth/user", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
                }),
            });

            const user = await res.json();

            if (res.ok && user) {
                return user;
            }

            return null;
            } catch (error) {
            console.error(error);
            }
        },
        }),
    ],
    callbacks: {
        jwt: async (token, user) => {
        return token;
        },
        session: async (session, token) => {
        return session;
        },
        pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
