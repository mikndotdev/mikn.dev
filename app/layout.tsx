import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "MikanDev",
	description: "We make cool stuff to make life easier 🍊",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
