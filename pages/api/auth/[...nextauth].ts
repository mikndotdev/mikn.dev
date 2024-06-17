// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }) {
            session.user.discord = token.discord as string;
            session.user.id = token.sub as string;
            session.user.email = token.email as string;
            session.user.name = token.name as string;
            session.user.image = token.image as string;

            return session;
        },
    },
    providers: [
        {
            id: "logto",
            name: "Logto",
            type: "oauth",
            wellKnown: "https://account.mikn.dev/oidc/.well-known/openid-configuration",
            authorization: {
                params: { scope: "openid offline_access profile email identities" },
            },
            clientId: process.env.LOGTO_CLIENT_ID,
            clientSecret: process.env.LOGTO_CLIENT_SECRET,
            client: {
                id_token_signed_response_alg: "ES384",
            },
            profile: async (tokens) => {
                const userinfoResponse = await fetch('https://account.mikn.dev/oidc/me', {
                    cache: 'no-store',
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`,
                    },
                });
                const userinfo = await userinfoResponse.json();
                console.log(userinfo);

                return {
                    id: userinfo.sub,
                    name: userinfo.name,
                    email: userinfo.email,
                    image: userinfo.picture,
                    discord: userinfo.identities.discord?.userId,
                };
            },
        },
    ],
};

export default NextAuth(authOptions);
