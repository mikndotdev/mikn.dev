"use client";
import { TypewriterEffect } from "../ui/type";
import SpinningGallery from "../ui/SpinningGallery";
import { useClientTranslation } from "../i18n/client";
import { Button, Heading, Card, Center } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import mikanLogo from "../assets/mikandev-circle.webp";
import discord from "../assets/discord.svg";
import server from "../assets/server.svg";
import next from "../assets/nextdotjs.svg";
import ts from "../assets/typescript.svg";
import network from "../assets/network-wired.svg";
import game from "../assets/gamepad.svg";
import cloud from "../assets/cloud.svg";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "index");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    const images = [
        next.src,
        discord.src,
        server.src,
        game.src,
        ts.src,
        network.src,
        cloud.src,
    ];

    const words = [
        {
            text: t("Sweet"),
        },
        {
            text: t("And"),
        },
        {
            text: t("Juicy"),
            className: "text-orange-500 dark:text-orange-500",
        },
    ];

    return (
        <>
            <div className="relative">
                <Card className="mt-20">
                    <Center className="mt-5">
                        <TypewriterEffect words={words} className="" />
                    </Center>
                    <Heading
                        className="flex justify-center items-center mt-3"
                        size="md"
                    >
                        {t("below-main-heading")}
                    </Heading>
                    <Center className="mt-7 mb-5">
                        <Button
                            colorScheme="primary"
                            className="mr-3 animate-bounce"
                            onClick={() => router.push("/services")}
                        >
                            {t("buttons.check_out")}
                        </Button>
                        <Button
                            colorScheme="secondary"
                            className="ml-3"
                            onClick={() => router.push("/account")}
                        >
                            {t("buttons.account")}
                        </Button>
                    </Center>
                </Card>
                <Card className="mt-5">
                <Heading
                        className="flex justify-center items-center mt-3"
                        size="5xl"
                    >
                        {t("manySkillTitle")}
                </Heading>
                <Heading
                        className="flex justify-center items-center mt-3"
                        size="md"
                    >
                        {t("manySkill")}
                </Heading>
                <div className="flex items-center justify-center min-h-[600px] bg-transparent">
                    <SpinningGallery
                        centerImage={mikanLogo.src}
                        images={images}
                    />
                </div>
                </Card>
            </div>
        </>
    );
}
