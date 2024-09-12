"use client";
import { TypewriterEffect } from "../ui/type";
import SpinningGallery from "../ui/SpinningGallery";
import { useClientTranslation } from "../i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import CinematicLoader from "../ui/CinematicLoader";
import Image from "next/image";
import mikanLogo from "../assets/mikandev-circle.webp";
import mikan from "../assets/mikan.png";
import discord from "../assets/discord.svg";
import server from "../assets/server.svg";
import next from "../assets/nextdotjs.svg";
import astro from "../assets/astro.svg";
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
        astro.src,
        brain.src,
    ];

    return (
        <>
            <CinematicLoader />
            <div className="relative px-4 sm:px-6 lg:px-8">
                <Card className="mt-5 sm:mt-10">
                    <Center className="mt-5">
                        <Image
                            src={KawaiiLogo.src}
                            alt="MikanDev"
                            width={300}
                            height={214}
                            className="mb-5 w-full max-w-[500px] h-auto"
                        />
                    </Center>
                    <Heading
                        className="flex justify-center items-center mt-3 text-center"
                        size="sm"
                        as="h2"
                    >
                        {t("below-main-heading")}
                    </Heading>
                    <Center className="mt-7 mb-5 flex-col sm:flex-row">
                        <Button
                            colorScheme="primary"
                            className="mb-3 sm:mb-0 sm:mr-3 animate-bounce"
                            onClick={() => router.push("/solutions")}
                        >
                            {t("buttons.check_out")}
                        </Button>
                        <Button
                            colorScheme="secondary"
                            className="sm:ml-3"
                            onClick={() => router.push("/account")}
                        >
                            {t("buttons.account")}
                        </Button>
                    </Center>
                </Card>
                <Card className="mt-5">
                    <Center className="mb-7">
                        <Heading size="3xl" as="h2" className="text-center">
                            {t("bragging")}
                        </Heading>
                    </Center>
                    <Flex direction="col" className="gap-4">
                        <StatCard
                            icon={<FaGithub className="text-white" size={50} />}
                            value="100+"
                            label={t("projCount")}
                        />
                        <StatCard
                            icon={<FaGlobe className="text-white" size={50} />}
                            value="2"
                            label={t("languages")}
                        />
                        <StatCard
                            icon={<FaNetworkWired className="text-white" size={50} />}
                            value="5"
                            label={t("networkRegions")}
                        />
                        <StatCard
                            icon={<BsGpuCard className="text-white" size={50} />}
                            value="3"
                            label={t("gpuCompute")}
                        />
                        <StatCard
                            icon={<MdNetworkWifi3Bar className="text-white" size={50} />}
                            value="10+"
                            label={t("bandwidthTB")}
                        />
                        <StatCard
                            icon={<FaCalendarAlt className="text-white" size={50} />}
                            value="8+"
                            label={t("yearsOfEx")}
                        />
                    </Flex>
                </Card>
                <Card className="mt-5">
                    <Heading
                        className="flex justify-center items-center mt-3 text-center"
                        size="3xl"
                        as="h2"
                    >
                        {t("manySkillTitle")}
                    </Heading>
                    <Heading
                        className="flex justify-center items-center mt-3 text-center"
                        size="sm"
                    >
                        {t("manySkill")}
                    </Heading>
                    <div className="flex items-center justify-center min-h-[300px] sm:min-h-[600px] bg-transparent">
                        <SpinningGallery
                            centerImage={mikanLogo.src}
                            images={images}
                            duration="30"
                        />
                    </div>
                    <Heading
                        className="flex justify-center items-center mt-3 text-center"
                        size="2xl"
                        as="h2"
                    >
                        {t("poweringTheBest")}
                    </Heading>
                    <Flex direction="col" className="items-center mt-7 gap-6 sm:flex-row sm:justify-center">
                        <PoweredByCard
                            src={neody.src}
                            alt="Neodyland"
                            width={150}
                            height={100}
                            label={t("infraAndDev")}
                            onClick={() => router.push("https://neody.land/")}
                        />
                        <PoweredByCard
                            src={kuroneko.src}
                            alt="KuronekoServer"
                            width={50}
                            height={100}
                            label={t("formerDev")}
                            onClick={() => router.push("https://kuroneko6423.com/")}
                        />
                        <PoweredByCard
                            src={miq.src}
                            alt="Make it a Quote"
                            width={50}
                            height={100}
                            label={t("coreInfra")}
                            onClick={() => router.push("https://miq.moe/")}
                        />
                    </Flex>
                </Card>
            </div>
        </>
    );
}

function StatCard({ icon, value, label }) {
    return (
        <Card className="w-full">
            <Center>
                {icon}
                <Flex direction="col" justify="start" className="ml-5">
                    <Heading size="2xl">{value}</Heading>
                    <Heading size="xs">{label}</Heading>
                </Flex>
            </Center>
        </Card>
    );
}

function PoweredByCard({ src, alt, width, height, label, onClick }) {
    return (
        <Flex direction="col" center className="w-full sm:w-auto">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onClick={onClick}
                className="cursor-pointer"
            />
            <Heading size="sm" className="mt-2 text-center">{label}</Heading>
        </Flex>
    );
}