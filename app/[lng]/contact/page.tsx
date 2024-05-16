"use client";
import { TypewriterEffect } from "@/app/ui/type";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import { Vortex } from "@/app/ui/vortex";
import { FaPhoneAlt, FaEnvelope, FaDiscord } from "react-icons/fa";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "contact");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    return (
        <>
            <div className="relative">
                <Card className="mt-20">
                    <Heading
                        className="flex justify-center items-center"
                        size="5xl"
                    >
                        {t("contactUs")}
                    </Heading>
                    <Card className="mt-5">
                        <Flex className="" justify="between" align="center">
                            <div>
                                <Heading
                                    className="flex justify-left items-center ml-5"
                                    size="3xl"
                                >
                                    {t("phone")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    +81 050-1808-4545
                                </Heading>
                            </div>
                            <FaPhoneAlt
                                size={80}
                                className="mr-5 text-orange-500"
                            />
                        </Flex>
                    </Card>
                    <Card className="mt-5">
                        <Flex className="" justify="between" align="center">
                            <div>
                                <Heading
                                    className="flex justify-left items-center ml-5"
                                    size="3xl"
                                >
                                    {t("email")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    hello@mikn.dev
                                </Heading>
                            </div>
                            <FaEnvelope
                                size={80}
                                className="mr-5 text-orange-500"
                            />
                        </Flex>
                    </Card>
                    <Card className="mt-5">
                        <Flex className="" justify="between" align="center">
                            <div>
                                <Heading
                                    className="flex justify-left items-center ml-5"
                                    size="3xl"
                                >
                                    {t("discord")}
                                </Heading>
                                <Button
                                    className="ml-5 mt-3"
                                    colorScheme="primary"
                                    onClick={() =>
                                        router.push(
                                            "https://discord.gg/FZCN6fjPuG",
                                        )
                                    }
                                >
                                    {t("join")}
                                </Button>
                            </div>
                            <FaDiscord
                                size={80}
                                className="mr-5 text-orange-500"
                            />
                        </Flex>
                    </Card>
                    <Heading
                        className="flex justify-left items-center ml-5 mt-5"
                        size="md"
                    >
                        {t("discourageInternationalCalls")}
                    </Heading>
                </Card>
            </div>
        </>
    );
}
