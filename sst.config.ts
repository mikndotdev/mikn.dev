/// <reference path="./.sst/platform/config.d.ts" />

import { Secret } from "./.sst/platform/src/components";

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
      link: [secret],
      domain: {
        name: "mikn.dev",
        dns: sst.cloudflare.dns()
      }
    });
  },
});
