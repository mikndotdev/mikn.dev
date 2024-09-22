/// <reference path="./.sst/platform/config.d.ts" />

const logtoSecret = new sst.Secret("LOGTO_CLIENT_SECRET")
const logtoId = new sst.Secret("LOGTO_CLIENT_ID")
const logtom2msecret = new sst.Secret("LOGTO_M2M_SECRET")
const lotom2mid = new sst.Secret("LOGTO_M2M_ID")
const nextauthsecret = new sst.Secret("NEXTAUTH_SECRET")
const s3endpoint = new sst.Secret("S3_ENDPOINT")
const s3accesskey = new sst.Secret("S3_ACCESS_KEY")
const s3secret = new sst.Secret("S3_SECRET_KEY")

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
    new sst.aws.Nextjs("mikn-dev" , {
      link: [logtoSecret, logtoId, logtom2msecret, lotom2mid, nextauthsecret, s3endpoint, s3accesskey, s3secret],
      domain: {
        name: "mikn.dev",
        dns: sst.cloudflare.dns()
      }
    });
  },
});
