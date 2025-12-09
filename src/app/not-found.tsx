import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
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
            <h1 className={"text-4xl text-center text-white"}>
              404 - Page Not Found
            </h1>
            <Link href={"/"}>
              <button className={"btn btn-primary text-white mt-5"}>
                Take me back
              </button>
            </Link>
          </div>
        </body>
      </html>
    </>
  );
}
