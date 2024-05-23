import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import ClientSessionProvider from "@/app/ui/session";
import AuthComponent from "@/app/ui/auth";
import "./globals.css";

const hsr = localFont({ src: "./assets/HSR.woff2" });

export const metadata: Metadata = {
    title: "MikanDev",
    description: "We make cool stuff to make life easier 🍊",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={hsr.className}
            lang={headers().get("x-locale")?.split("-")[0]}
        >
            <body>
                <ClientSessionProvider>{children}</ClientSessionProvider>
                <script
                    async
                    src="https://analytics.mikandev.tech/script.js"
                    data-website-id="8bbb0139-4084-4ba4-ab42-810b1002b0e3"
                ></script>
            </body>
        </html>
    );
}
