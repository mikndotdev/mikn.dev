import { ReactNode } from "react";
import localFont from "next/font/local";
import { CursorToysProvider } from "@/contexts/CursorToysContext";

const hsr = localFont({
  src: "../assets/fonts/HSR.woff2",
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={hsr.className}>
      <body>
        <CursorToysProvider>{children}</CursorToysProvider>
      </body>
    </html>
  );
}
