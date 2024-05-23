import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
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
            clientId: "poeonyjcxcp0jl391iky7",
            clientSecret: "WReLJwtNr7UYEQ8YKP164OYqWdPJ4LbH",
            client: {
                id_token_signed_response_alg: "ES384",
            },
            profile(profile) {
                // You can customize the user profile mapping here
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
