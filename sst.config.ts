/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "mikn-dev",
            removal: input?.stage === "main" ? "retain" : "remove",
            home: "aws",
            providers: { cloudflare: true },
        };
    },
    async run() {
        const LOGTO_CLIENT_SECRET = new sst.Secret("LOGTO_CLIENT_SECRET");
        const LOGTO_CLIENT_ID = new sst.Secret("LOGTO_CLIENT_ID");
        const LOGTO_M2M_SECRET = new sst.Secret("LOGTO_M2M_SECRET");
        const LOGTO_M2M_ID = new sst.Secret("LOGTO_M2M_ID");
        const NEXTAUTH_SECRET = new sst.Secret("NEXTAUTH_SECRET");
        const NEXTAUTH_URL = new sst.Secret("NEXTAUTH_URL");
        const S3_ACCESS_KEY = new sst.Secret("S3_ACCESS_KEY");
        const S3_SECRET_KEY = new sst.Secret("S3_SECRET_KEY");
        const S3_BUCKET = new sst.Secret("S3_BUCKET");
        new sst.aws.Nextjs("mikn-dev", {
            link: [
                LOGTO_CLIENT_SECRET,
                LOGTO_CLIENT_ID,
                LOGTO_M2M_SECRET,
                LOGTO_M2M_ID,
                NEXTAUTH_SECRET,
                NEXTAUTH_URL,
                S3_ACCESS_KEY,
                S3_SECRET_KEY,
                S3_BUCKET,
            ],
            domain: {
                name: "mikn.dev",
                dns: sst.cloudflare.dns(),
            },
            environment: {
                NEXTAUTH_URL: NEXTAUTH_URL.value,
            },
            server: {
                install: ["sharp"],
            },
        });
    },
});
