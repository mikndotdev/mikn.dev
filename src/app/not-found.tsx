import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { Button } from "@/components/animate-ui/components/buttons/button";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export default function NotFound() {
  return (
    <>
      <html className={notoSansJP.variable} lang="en">
        <body>
          <div className="h-screen flex flex-col items-center justify-center">
            <h1 className={"text-4xl text-center text-white font-bold "}>
              404 - Page Not Found
            </h1>
            <Link href={"/"}>
              <Button className={"mt-5"}>Take me back</Button>
            </Link>
          </div>
        </body>
      </html>
    </>
  );
}
