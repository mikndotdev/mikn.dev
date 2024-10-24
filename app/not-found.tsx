"use client";
export const runtime = "edge";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { cookieName } from "./i18n/settings";
import { useRouter } from "next/navigation";

import Image from "next/image";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const router = useRouter();

    return (
        <>
            <div className="relative">Coming soon...</div>
        </>
    );
}
