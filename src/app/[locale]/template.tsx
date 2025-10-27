"use client";
import { useSwetrix } from "@swetrix/nextjs";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  useSwetrix("XxNIMaHCaVG3", { apiURL: "https://analytics.mikandev.tech/log" });

  return (
    <>
      <div>{children}</div>
    </>
  );
}
