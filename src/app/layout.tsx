import { ReactNode } from "react";
import type { Metadata } from "next";
import { ConsentManager } from "./consent-manager";

export const metadata: Metadata = {
  title: "MikanDev",
  description: "We make cool stuff to make life easier 🍊",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ConsentManager>
      <>{children}</>
    </ConsentManager>
  );
}
