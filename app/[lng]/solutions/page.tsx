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
        <div>
            <Center className="mt-5">
                <Heading size="6xl">{t("webSolutions")}</Heading>
            </Center>
            <Flex className="mt-10 mb-5" justify="center" space={7}>
            <Card className="w-[600px] place-content-center flex items-center flex-col">
                    <Text className="text-white text-2xl font-bold mb-3">{t("MDAcc")}</Text>
                    <Image src={MDAccount.src} alt="MDAccount" width={290} height={290} className="mb-3"/>
                    <Text className="text-white text-xl mb-5">{t("MDAccBlurb")}</Text>
                    <Button className="bg-primary" onClick={() => router.push("/account")}>{t("checkOut")}</Button>
                </Card>
                <Card className="w-[600px] place-content-center flex items-center flex-col">
                    <Text className="text-white text-2xl font-bold mb-3">{t("NicoDL")}</Text>
                    <SiNiconico className="text-primary mb-3" size={150}/>
                    <Text className="text-white text-xl mb-5">{t("NicoDLBlurb")}</Text>
                    <Button className="bg-primary" onClick={() => router.push("https://nicodl.mikn.dev/")}>{t("checkOut")}</Button>
                </Card>
            </Flex>
            <Center className="mt-5">
                <Heading size="6xl">{t("devSolutions")}</Heading>
            </Center>
            <Flex className="mt-10" justify="center" space={7}>
                <Card className="w-[600px] place-content-center flex items-center flex-col">
                    <Text className="text-white text-2xl font-bold mb-3">{t("images")}</Text>
                    <FaRegImages className="text-primary mb-3" size={170}/>
                    <Text className="text-white text-xl mb-5">{t("imagesBlurb")}</Text>
                    <Button className="bg-primary" onClick={() => router.push("/solutions/images")}>{t("checkOut")}</Button>
                </Card>
            </Flex>
            <Center className="mt-5">
                <Heading size="6xl">{t("Bots")}</Heading>
            </Center>
            <Flex className="mt-10 mb-5" justify="center" space={7}>
            <Card className="w-[600px] place-content-center flex items-center flex-col">
                    <Text className="text-white text-2xl font-bold mb-3">{t("xfixer")}</Text>
                    <Image src={XFixer.src} alt="MDAccount" width={150} height={150} className="mb-3 rounded-full"/>
                    <Text className="text-white text-xl mb-5">{t("xfixerBlurb")}</Text>
                    <Button className="bg-primary" onClick={() => router.push("/solutions/xfixer")}>{t("checkOut")}</Button>
                </Card>
                <Card className="w-[600px] place-content-center flex items-center flex-col">
                    <Text className="text-white text-2xl font-bold mb-3">{t("mikanbot")}</Text>
                    <Image src={mikanbot.src} alt="MDAccount" width={150} height={150} className="mb-3 rounded-full"/>
                    <Text className="text-white text-xl mb-5">{t("mikanbotBlurb")}</Text>
                    <Button className="bg-primary" onClick={() => router.push("/solutions/mikanbot")}>{t("checkOut")}</Button>
                </Card>
            </Flex>
        </div>
    );
}
