"use client";
export const runtime = "edge";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaDiscord } from "react-icons/fa";
import { TbCircleArrowDownRightFilled } from "react-icons/tb";
import React, { Fragment } from "react";

import ChatwootWidget from "@/app/ui/chatwoot";

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
                <Fragment>
                    <ChatwootWidget />
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
                                        +81 050-5532-0721
                                    </Heading>
                                </div>
                                <FaPhoneAlt
                                    size={80}
                                    className="mr-5 text-primary"
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
                                    className="mr-5 text-primary"
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
                                        {t("livechat")}
                                    </Heading>
                                    <Heading
                                        className="flex justify-left items-center ml-5 mt-3"
                                        size="2xl"
                                    >
                                        {t("chatNow")}
                                    </Heading>
                                </div>
                                <TbCircleArrowDownRightFilled
                                    size={80}
                                    className="mr-5 text-primary"
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
                                    className="mr-5 text-primary"
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
                </Fragment>
            </div>
        </>
    );
}
