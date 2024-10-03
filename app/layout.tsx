import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import ClientSessionProvider from "@/app/ui/session";
import AuthComponent from "@/app/ui/auth";
import { ToastProvider } from "@neodyland/ui";
import AccButton from "./ui/AccButton";
import "./globals.css";

const hsr = localFont({ src: "./assets/HSR.woff2" });

export const metadata: Metadata = {
    title: "MikanDev",
    description: "We make cool stuff to make life easier 🍊",
        openGraph: {
            images: ['https://mikn.dev/og-homepage.png']
        }
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
                <ClientSessionProvider>
                    {children}
                    <AccButton />
                </ClientSessionProvider>
                <script
                    defer
                    src="https://analytics.mikandev.tech/script.js"
                    data-website-id="c20716e6-ae00-4444-a6ae-db49328a75a4"
                />
            </body>
        </html>
    );
}
