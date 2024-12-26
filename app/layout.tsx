import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { CSPostHogProvider } from "@/app/components/posthog";
import { Toaster } from "sonner";
import AccButton from "./components/AccButton";
import "./globals.css";

const hsr = localFont({ src: "./assets/fonts/HSR.woff2" });

export const metadata: Metadata = {
    title: "MikanDev",
    description: "We make cool stuff to make life easier 🍊",
    openGraph: {
        images: ["https://mikn.dev/og-homepage.png"],
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={hsr.className} lang="en">
            <body>
                <CSPostHogProvider>
                    <SessionProvider>
                        {children}
                        <AccButton />
                        <Toaster richColors />
                    </SessionProvider>
                </CSPostHogProvider>
            </body>
        </html>
    );
}
