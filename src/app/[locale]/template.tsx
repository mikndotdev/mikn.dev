"use client";
import { useSwetrix } from "@swetrix/nextjs";
import { ReactNode } from "react";
import { CursorToys } from "@/components/CursorToys";
import SettingsController from "@/components/SettingsController";

export default function PagesLayout({ children }: { children: ReactNode }) {
  useSwetrix("XxNIMaHCaVG3", { apiURL: "https://analytics.mikandev.tech/log" });

  return (
    <CursorToys>
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
        {children}
      </div>
      <SettingsController />
    </CursorToys>
  );
}
