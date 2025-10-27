"use client";
import { useTranslations } from "next-intl";
import { useSwetrix } from "@swetrix/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  useSwetrix("XxNIMaHCaVG3", { apiURL: "https://analytics.mikandev.tech/log" });

  return (
    <>
      <div>{children}</div>
    </>
  );
}
