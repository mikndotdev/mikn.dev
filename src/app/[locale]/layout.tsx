import type { Metadata } from "next";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import "../globals.css";
import { ConsentManager } from "@/components/consent-manager";

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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <ConsentManager>
          {children}
          <Toaster richColors />
        </ConsentManager>
      </NextIntlClientProvider>
    </>
  );
}
