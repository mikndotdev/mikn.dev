import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { Resource } from "sst";

async function refreshAccessToken(token: JWT) {
    try {
        const response = await fetch("https://auth.mikandev.com/oidc/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: Resource.LOGTO_CLIENT_ID.value,
                client_secret: Resource.LOGTO_CLIENT_SECRET.value,
                grant_type: "refresh_token",
                refresh_token: token.refreshToken as string,
            }),
        });

        const refreshedTokens = await response.json();

        if (!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        };
    } catch (error) {
        console.log(error);
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

const authOptions: AuthOptions = {
    secret: Resource.NEXTAUTH_SECRET.value,
    callbacks: {
        async jwt({ token, account, user }) {
            // Initial sign in
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: account.expires_at
                        ? account.expires_at * 1000
                        : undefined,
                    refreshToken: account.refresh_token,
                    user,
                };
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < (token.accessTokenExpires as number)) {
                return token;
            }

            // Access token has expired, try to update it
            return refreshAccessToken(token);
        },
        async session({ session, token }) {
            if (token.error) {
                // Handle error state here
                return { ...session, error: token.error };
            }

            // Fetch user info with the new access token
            try {
                const response = await fetch(
                    "https://auth.mikandev.com/oidc/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token.accessToken}`,
                        },
                    },
                );

                if (response.ok) {
                    const userInfo = await response.json();
                    session.user = {
                        id: userInfo.sub,
                        name: userInfo.name ?? userInfo.username,
                        email: userInfo.email,
                        image: userInfo.picture,
                        discord: userInfo.identities?.discord?.userId,
                    };
                } else {
                    console.error(
                        "Failed to fetch user info:",
                        response.statusText,
                    );
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }

            (session as any).accessToken = token.accessToken;
            return session;
        },
    },
    providers: [
        {
            id: "logto",
            name: "MikanDev Account",
            type: "oauth",
            wellKnown:
                "https://auth.mikandev.com/oidc/.well-known/openid-configuration",
            authorization: {
                params: {
                    scope: "openid offline_access profile email identities",
                },
            },
            clientId: Resource.LOGTO_CLIENT_ID.value,
            clientSecret: Resource.LOGTO_CLIENT_SECRET.value,
            client: {
                id_token_signed_response_alg: "ES384",
            },
            idToken: true,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.username,
                    email: profile.email,
                    image: profile.picture,
                    discord: profile.identities?.discord?.userId,
                };
            },
        },
    ],
};

export default NextAuth(authOptions);
export { authOptions };
