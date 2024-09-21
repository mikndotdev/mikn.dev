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
    new sst.aws.Nextjs("mikn-dev" , {
      domain: {
        name: "mikn.dev",
        dns: sst.cloudflare.dns()
      }
    });
  },
});
