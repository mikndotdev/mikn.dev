import type { Metadata } from "next";
import localFont from "next/font/local";
import { CSPostHogProvider } from "@/components/posthog";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import "../globals.css";

const hsr = localFont({ src: "../../assets/fonts/HSR.woff2" });

export const metadata: Metadata = {
	title: "MikanDev",
	description: "We make cool stuff to make life easier 🍊",
	openGraph: {
		images: ["https://mikn.dev/img/og-homepage.png"],
	},
};

interface LocaleLayoutProps {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
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

	setRequestLocale(locale);
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<html className={hsr.className} lang={locale} data-theme={"mikn"}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<CSPostHogProvider>
						{children}
						<Toaster richColors />
					</CSPostHogProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
