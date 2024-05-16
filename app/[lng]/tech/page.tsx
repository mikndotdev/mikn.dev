"use client";
import { TypewriterEffect } from "@/app/ui/type";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import { Vortex } from "@/app/ui/vortex";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "index");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    const words = [
        {
            text: t("MikanDev"),
            className: "text-orange-500 dark:text-orange-500",
        },
        {
            text: t("Tech"),
            className: "text-green-500 dark:text-green-500",
        },
    ];

    return (
        <>
            <div className="relative">
                <Card className="mt-20">
                    <TypewriterEffect words={words} className="" />
                </Card>
            </div>
        </>
    );
}
