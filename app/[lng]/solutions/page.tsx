"use client";
import { Button, Heading, Card, Center, Flex, Text } from "@neodyland/ui";
import { useClientTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import MDAccount from "@/app/assets/MDAccount.png";
import XFixer from "@/app/assets/xfixer.png";
import mikanbot from "@/app/assets/mikanbot.png";

import { FaRegImages } from "react-icons/fa";
import { SiNiconico } from "react-icons/si";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "solutions/index");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Center className="mt-5">
                <Heading size="4xl" className="text-center">{t("webSolutions")}</Heading>
            </Center>
            <Flex className="mt-10 mb-5 flex-col sm:flex-row" justify="center" align="stretch" space={7}>
                <SolutionCard
                    title={t("MDAcc")}
                    image={<Image src={MDAccount.src} alt="MDAccount" width={290} height={290} className="mb-3 w-full h-auto max-w-[290px]"/>}
                    description={t("MDAccBlurb")}
                    buttonText={t("checkOut")}
                    onClick={() => router.push("/account")}
                />
                <SolutionCard
                    title={t("NicoDL")}
                    image={<SiNiconico className="text-primary mb-3" size={150}/>}
                    description={t("NicoDLBlurb")}
                    buttonText={t("checkOut")}
                    onClick={() => router.push("https://nicodl.mikn.dev/")}
                />
            </Flex>
            <Center className="mt-10">
                <Heading size="4xl" className="text-center">{t("devSolutions")}</Heading>
            </Center>
            <Flex className="mt-10 mb-5" justify="center">
                <SolutionCard
                    title={t("images")}
                    image={<FaRegImages className="text-primary mb-3" size={170}/>}
                    description={t("imagesBlurb")}
                    buttonText={t("checkOut")}
                    onClick={() => router.push("/solutions/images")}
                />
            </Flex>
            <Center className="mt-10">
                <Heading size="4xl" className="text-center">{t("Bots")}</Heading>
            </Center>
            <Flex className="mt-10 mb-5 flex-col sm:flex-row" justify="center" align="stretch" space={7}>
                <SolutionCard
                    title={t("xfixer")}
                    image={<Image src={XFixer.src} alt="XFixer" width={150} height={150} className="mb-3 rounded-full"/>}
                    description={t("xfixerBlurb")}
                    buttonText={t("checkOut")}
                    onClick={() => router.push("/solutions/xfixer")}
                />
                <SolutionCard
                    title={t("mikanbot")}
                    image={<Image src={mikanbot.src} alt="Mikanbot" width={150} height={150} className="mb-3 rounded-full"/>}
                    description={t("mikanbotBlurb")}
                    buttonText={t("checkOut")}
                    onClick={() => router.push("/solutions/mikanbot")}
                />
            </Flex>
        </div>
    );
}

function SolutionCard({ title, image, description, buttonText, onClick }: { title: string, image: JSX.Element, description: string, buttonText: string, onClick: () => void }) {
    return (
        <Card className="w-full sm:w-[600px] place-content-center flex items-center flex-col mb-5 sm:mb-0">
            <Text className="text-white text-xl sm:text-2xl font-bold mb-3 text-center">{title}</Text>
            <div className="flex justify-center items-center h-[150px] mb-3">
                {image}
            </div>
            <Text className="text-white text-lg sm:text-xl mb-5 text-center px-4">{description}</Text>
            <Button className="bg-primary" onClick={onClick}>{buttonText}</Button>
        </Card>
    );
}