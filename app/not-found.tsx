"use client";
export const runtime = "edge";
import { useRouter } from "next/navigation";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";

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
                <Heading>Not Found</Heading>
            </Center>
        </div>
    );
}
