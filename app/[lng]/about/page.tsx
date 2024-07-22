"use client";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import {
    SiNextdotjs,
    SiCloudflare,
    SiTypescript,
    SiTailwindcss,
    SiUmami,
} from "react-icons/si";
import { FaPalette, FaLanguage } from "react-icons/fa";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "about");
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
                        {t("aboutThisSite")}
                    </Heading>
                    <Card className="mt-5">
                        <Flex className="" justify="between" align="center">
                            <div>
                                <Heading
                                    className="flex justify-left items-center ml-5"
                                    size="3xl"
                                >
                                    {t("builtWith")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    Next.js, Tailwind CSS, TypeScript
                                </Heading>
                            </div>
                            <SiTailwindcss
                                size={80}
                                className="mr-5 text-primary"
                            />
                            <SiTypescript
                                size={80}
                                className="mr-5 text-primary"
                            />
                            <SiNextdotjs
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
                                    {t("hostedOn")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    Cloudflare
                                </Heading>
                            </div>
                            <SiCloudflare
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
                                    {t("analyticsBy")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    Umami (Selfhosted)
                                </Heading>
                            </div>
                            <SiUmami size={80} className="mr-5 text-primary" />
                        </Flex>
                    </Card>
                </Card>
                <Card className="mt-5">
                    <Heading
                        className="flex justify-center items-center"
                        size="5xl"
                    >
                        {t("specialThanks")}
                    </Heading>
                    <Card className="mt-5">
                        <Flex className="" justify="between" align="center">
                            <div>
                                <Heading
                                    className="flex justify-left items-center ml-5"
                                    size="3xl"
                                >
                                    {t("illustrationsBy")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    たまこさん
                                </Heading>
                                <Button
                                    className="ml-5 mt-3"
                                    colorScheme="primary"
                                    onClick={() =>
                                        router.push(
                                            "https://twitter.com/tkg_0913",
                                        )
                                    }
                                >
                                    {t("twitter")}
                                </Button>
                            </div>
                            <FaPalette
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
                                    {t("translatedBy")}
                                </Heading>
                                <Heading
                                    className="flex justify-left items-center ml-5 mt-3"
                                    size="2xl"
                                >
                                    ペタライト
                                </Heading>
                            </div>
                            <FaLanguage
                                size={80}
                                className="mr-5 text-primary"
                            />
                        </Flex>
                    </Card>
                </Card>
            </div>
        </>
    );
}
