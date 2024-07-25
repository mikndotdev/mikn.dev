"use client";
import { TypewriterEffect } from "../ui/type";
import SpinningGallery from "../ui/SpinningGallery";
import { useClientTranslation } from "../i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";
import mikanLogo from "../assets/mikandev-circle.webp";
import mikan from "../assets/mikan.png";
import discord from "../assets/discord.svg";
import server from "../assets/server.svg";
import next from "../assets/nextdotjs.svg";
import ts from "../assets/typescript.svg";
import network from "../assets/network-wired.svg";
import game from "../assets/gamepad.svg";
import cloud from "../assets/cloud.svg";
import neody from "../assets/neody.svg";
import kuroneko from "../assets/krnk.png";
import miq from "../assets/miq.png";
import brain from "../assets/brain.svg";
import KawaiiLogo from "../assets/mikan-vtube.svg";

import {
    FaGithub,
    FaGlobe,
    FaNetworkWired,
    FaCalendarAlt,
} from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { MdNetworkWifi3Bar } from "react-icons/md";

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
        brain.src,
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
            className: "text-primary dark:text-primary",
        },
    ];

    return (
        <>
            <div className="relative">
                <Card className="mt-20">
                    <Center className="mt-5">
                        <Image
                            src={KawaiiLogo.src}
                            alt="MikanDev"
                            width={700}
                            height={500}
                            className="mb-5"
                        />
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
                            onClick={() => router.push("/solutions")}
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
                    <Center className="mb-7">
                        <Heading size="4xl">{t("bragging")}</Heading>
                    </Center>
                    <Center className="mb-4">
                        <Card className="mr-2 min-w-80">
                            <Center>
                                <FaGithub className="text-white" size={70} />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">100+</Heading>
                                    <Heading size="xs">
                                        {t("projCount")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 mr-2 min-w-80">
                            <Center>
                                <FaGlobe className="text-white" size={70} />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">2</Heading>
                                    <Heading size="xs">
                                        {t("languages")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 min-w-80">
                            <Center>
                                <FaNetworkWired
                                    className="text-white"
                                    size={70}
                                />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">5</Heading>
                                    <Heading size="xs">
                                        {t("networkRegions")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                    </Center>
                    <Center>
                        <Card className="mr-2 min-w-80">
                            <Center>
                                <BsGpuCard className="text-white" size={70} />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">3</Heading>
                                    <Heading size="xs">
                                        {t("gpuCompute")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 mr-2 min-w-80">
                            <Center>
                                <MdNetworkWifi3Bar
                                    className="text-white"
                                    size={70}
                                />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">10+</Heading>
                                    <Heading size="xs">
                                        {t("bandwidthTB")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 min-w-80">
                            <Center>
                                <FaCalendarAlt
                                    className="text-white"
                                    size={70}
                                />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">8+</Heading>
                                    <Heading size="xs">
                                        {t("yearsOfEx")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
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
                            duration="30"
                        />
                    </div>
                    <Heading
                        className="flex justify-center items-center mt-3"
                        size="4xl"
                    >
                        {t("poweringTheBest")}
                    </Heading>
                    <Center className="mt-7">
                        <Flex direction="col" center className="mr-5">
                            <Image
                                src={neody.src}
                                alt="Neodyland"
                                width={150}
                                height={100}
                                onClick={() =>
                                    router.push("https://neody.land/")
                                }
                            />
                            <Heading size="sm">{t("infraAndDev")}</Heading>
                        </Flex>
                        <Flex direction="col" center className="ml-5">
                            <Image
                                src={kuroneko.src}
                                alt="KuronekoServer"
                                width={50}
                                height={100}
                                onClick={() =>
                                    router.push("https://kuroneko6423.com/")
                                }
                            />
                            <Heading size="sm">{t("formerDev")}</Heading>
                        </Flex>
                        <Flex direction="col" center className="ml-5">
                            <Image
                                src={miq.src}
                                alt="Make it a Quote"
                                width={50}
                                height={100}
                                onClick={() => router.push("https://miq.moe/")}
                            />
                            <Heading size="sm">{t("coreInfra")}</Heading>
                        </Flex>
                    </Center>
                </Card>
            </div>
        </>
    );
}
