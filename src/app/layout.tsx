import { ReactNode } from "react";
import { CursorToysProvider } from "@/contexts/CursorToysContext";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={notoSansJP.variable}>
      <head>
        <Script
          defer
          src="https://cdn.mikn.dev/analytics/script"
          data-website-id="35401362-eb2f-4ee5-abf3-b5da8c49721a"
          data-host-url="https://analytics.mikandev.com"
        />
      </head>
      <body>
        <CursorToysProvider>{children}</CursorToysProvider>
      </body>
    </html>
  );
}
