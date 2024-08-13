"use client";
import {
    Button,
    Heading,
    Card,
    Center,
    Flex,
    Text,
    CodeBlock,
} from "@neodyland/ui";
import { useClientTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
    FaGithub,
    FaGlobe,
    FaNetworkWired,
    FaCalendarAlt,
    FaArrowRight,
    FaQuestionCircle,
    FaCode,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsGpuCard } from "react-icons/bs";
import { MdNetworkWifi3Bar, MdCached } from "react-icons/md";
import { RiSlowDownFill } from "react-icons/ri";
import { FaBoltLightning } from "react-icons/fa6";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "solutions/images");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    return (
        <main>
            <div className="relative">
                <Center>
                    <Heading size="4xl">MikanDev Images</Heading>
                    <Heading className="ml-3 text-primary">Public beta</Heading>
                </Center>
                <Card className="mt-5">
                    <Center>
                        <Heading size="4xl" className="">
                            {t("publicImages")}
                        </Heading>
                    </Center>
                    <Center>
                        <Heading size="md" className="mt-2">
                            {t("publicImagesBlurb")}
                        </Heading>
                    </Center>
                </Card>
                <Card className="mt-5">
                    <Center className="mb-7">
                        <Heading size="4xl">{t("bragging")}</Heading>
                    </Center>
                    <Center className="mb-4">
                        <Card className="ml-2 mr-2 min-w-80">
                            <Center>
                                <FaGlobe className="text-white" size={70} />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">
                                        {t("serverless")}
                                    </Heading>
                                    <Heading size="xs">{t("origins")}</Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 mr-2 min-w-80">
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
                                    <Heading size="2xl">123</Heading>
                                    <Heading size="xs">{t("edgePoPs")}</Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <Card className="ml-2 min-w-80">
                            <Center>
                                <MdCached className="text-white" size={70} />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">Permanent</Heading>
                                    <Heading size="xs">
                                        {t("permacache")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                    </Center>
                    <Heading size="4xl" className="text-center mt-5 mb-5">
                        {t("performance")}
                    </Heading>
                    <Center>
                        <Card className="mr-2 min-w-80">
                            <Center>
                                <RiSlowDownFill
                                    className="text-white"
                                    size={70}
                                />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">~120ms</Heading>
                                    <Heading size="xs">
                                        {t("avgOrigin")}
                                    </Heading>
                                </Flex>
                            </Center>
                        </Card>
                        <FaArrowRight
                            className="text-white mt-8 ml-5 mr-5 animate-pulse"
                            color="#ff9900"
                            size={70}
                        />
                        <Card className="ml-2 min-w-80">
                            <Center>
                                <FaBoltLightning
                                    className="text-white"
                                    size={70}
                                />
                                <Flex
                                    direction="col"
                                    justify="start"
                                    className="ml-5"
                                >
                                    <Heading size="2xl">~26ms</Heading>
                                    <Heading size="xs">{t("onEdge")}</Heading>
                                </Flex>
                            </Center>
                        </Card>
                    </Center>
                    <Flex direction="row" className="mt-5">
                        <FaQuestionCircle
                            fontSize={30}
                            className="ml-5 lg:ml-10"
                            color="#3CF6E7"
                        />
                        <Text className="text-white">{t("testParams")}</Text>
                    </Flex>
                </Card>
                <Card className="mt-5">
                    <Center className="mb-7">
                        <Heading size="4xl">{t("works")}</Heading>
                    </Center>
                    <Flex direction="row" className="mt-5">
                        <SiNextdotjs
                            fontSize={30}
                            className="ml-5 lg:ml-10"
                            color="#FF9900"
                        />
                        <Text className="text-white">{t("nextStatic")}</Text>
                    </Flex>
                    <Button
                        className="mt-5 ml-10"
                        colorScheme="primary"
                        onClick={() =>
                            router.push(
                                "https://docs.mikn.dev/solutions/images/#nextjs-integration",
                            )
                        }
                    >
                        {t("learnMore")}
                    </Button>
                    <Flex direction="row-reverse" className="mt-5">
                        <FaCode
                            fontSize={30}
                            className="mr-5 lg:mr-10"
                            color="#FF9900"
                        />
                        <Text className="text-white">{t("easyAPI")}</Text>
                    </Flex>
                    <CodeBlock
                        language="javascript"
                        links
                        text="https://i.mikandev.com/image/https://example.com/image.png?width=100"
                        theme="atom-one-dark"
                        className="mt-5"
                    />
                </Card>
            </div>
        </main>
    );
}
