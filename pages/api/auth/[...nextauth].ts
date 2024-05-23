// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        {
            id: "logto",
            name: "Logto",
            type: "oauth",
            wellKnown:
                "https://account.mikn.dev/oidc/.well-known/openid-configuration",
            authorization: {
                params: { scope: "openid offline_access profile email" },
            },
            clientId: process.env.LOGTO_CLIENT_ID,
            clientSecret: process.env.LOGTO_CLIENT_SECRET,
            client: {
                id_token_signed_response_alg: "ES384",
            },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.username,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        },
    ],
};

export default NextAuth(authOptions);
