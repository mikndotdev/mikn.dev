"use client";
import { useSwetrix } from "@swetrix/nextjs";
import { ReactNode } from "react";
import { CursorToys } from "@/components/CursorToys";
import SettingsController from "@/components/SettingsController";

export default function PagesLayout({ children }: { children: ReactNode }) {
  useSwetrix("XxNIMaHCaVG3", { apiURL: "https://analytics.mikandev.tech/log" });

  return (
    <CursorToys>
      {children}
      <SettingsController />
    </CursorToys>
  );
}
