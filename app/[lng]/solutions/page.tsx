"use client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useClientTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "index");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    return (
        <div>
            <Center>
            <Heading>Home</Heading>
            </Center>
        </div>
    );
}
