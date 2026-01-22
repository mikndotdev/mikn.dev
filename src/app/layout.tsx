import { ReactNode } from "react";
import { CursorToysProvider } from "@/contexts/CursorToysContext";
import { NextIntlClientProvider } from "next-intl";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={notoSansJP.variable}>
      <body>
        <NextIntlClientProvider>
          <CursorToysProvider>{children}</CursorToysProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
