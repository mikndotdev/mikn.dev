import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { CSPostHogProvider } from "@/app/components/posthog";
import { Toaster } from "sonner";
import AccButton from "@/app/components/AccButton";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import "../globals.css";

const hsr = localFont({ src: "../assets/fonts/HSR.woff2" });

export const metadata: Metadata = {
    title: "MikanDev",
    description: "We make cool stuff to make life easier 🍊",
    openGraph: {
        images: ["https://mikn.dev/og-homepage.png"],
    },
};

interface LocaleLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html className={hsr.className} lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <CSPostHogProvider>
                        <SessionProvider>
                            {children}
                            <AccButton />
                            <Toaster richColors />
                        </SessionProvider>
                    </CSPostHogProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
