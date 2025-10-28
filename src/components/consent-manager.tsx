import type { ReactNode } from "react";
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from "@c15t/nextjs/client";

export function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      {children}
    </ConsentManagerProvider>
  );
}
