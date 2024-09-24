"use client";
import { TypewriterEffect } from "@/app/ui/type";
import { useClientTranslation } from "@/app/i18n/client";
import {
    Button,
    Heading,
    Card,
    Center,
    Flex,
    Text,
    CodeBlock,
} from "@neodyland/ui";
import { useRouter } from "next/navigation";
import { Cobe } from "@/app/ui/cobe";
import Image from "next/image";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/ui/table";

import { FaMousePointer } from "react-icons/fa";

import dh from "@/app/assets/dh.svg";
import cf from "@/app/assets/cf.svg";
import bnuy from "@/app/assets/bnuy.svg";
import cloudfront from "@/app/assets/cloudfront.png";
import tigris from "@/app/assets/tigris.svg";

interface Props {
    params: {
        lng: string;
    };
}

const markers = [{ markerOffset: -27, name: "KIX", coordinates: [136, 30] }];

const soonmarkers = [
    { markerOffset: -27, name: "HND", coordinates: [141, 32] },
    { markerOffset: -27, name: "LON", coordinates: [0, 50] },
    { markerOffset: -27, name: "VIR", coordinates: [-77, 32] },
];

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "tech");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    const words = [
        {
            text: t("MikanDev"),
            className: "text-primary dark:text-primary",
        },
        {
            text: t("Tech"),
            className: "text-green-500 dark:text-green-500",
        },
    ];

    const data = [
        {
            name: t("codename"),
            place: t("place"),
            provider: t("provider"),
            count: t("count"),
        },
        {
            name: "KIX",
            place: t("osaka"),
            provider: t("self"),
            count: 4,
        },
        {
            name: "HND",
            place: t("tyo"),
            provider: t("aws"),
            count: 1,
        },
        {
            name: "LON",
            place: t("lon"),
            provider: t("aws"),
            count: 1,
        },
        {
            name: "LON2",
            place: t("lon"),
            provider: t("mg"),
            count: 3,
        },
        {
            name: "NYC",
            place: t("nyc"),
            provider: t("mg"),
            count: 1,
        },
        {
            name: "VIR1",
            place: t("vir"),
            provider: t("orcl"),
            count: 3,
        },
        {
            name: "VIR2",
            place: t("vir"),
            provider: t("gcp"),
            count: 1,
        },
        {
            name: "VIR3",
            place: t("vir"),
            provider: t("htzn"),
            count: 1,
        },
    ];

    return (
        <>
            <div className="relative">
                <Card className="mt-20">
                    <TypewriterEffect words={words} className="" />
                </Card>
                <Card className="mx-auto mt-10 py-10 text-center md:w-full">
                    <Heading
                        size="4xl"
                        className="text-center mt-0 animate-pulse"
                    >
                        {t("reliableNetwork")}
                    </Heading>
                    <Text size="2xl" className="text-center mt-5 text-white">
                        {t("reliableNetworkBlurb")}
                    </Text>
                    <Cobe />
                    <Flex direction="row">
                        <FaMousePointer
                            fontSize={30}
                            className="ml-5 lg:ml-10"
                            color="#FF9900"
                        />
                        <Text className="text-white">{t("draggable")}</Text>
                    </Flex>
                    <Table className="mt-5">
                        <TableBody>
                            {data.map((d) => (
                                <TableRow key={d.name}>
                                    <TableCell className="font-medium text-left text-white">
                                        {d.name}
                                    </TableCell>
                                    <TableCell className="font-medium text-left text-white">
                                        {d.place}
                                    </TableCell>
                                    <TableCell className="font-medium text-left text-white">
                                        {d.provider}
                                    </TableCell>
                                    <TableCell className="font-medium text-left text-white">
                                        {d.count}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <Card className="mx-auto mt-10 py-10 text-center md:w-full">
                    <Heading size="4xl" className="text-center mt-0">
                        {t("dualCDN")}
                    </Heading>
                    <Text size="md" className="text-center mt-5 text-white">
                        {t("dualCDNBlurb")}
                    </Text>
                    <Center className="mt-10">
                        <Flex direction="col">
                            <Image
                                src={tigris.src}
                                alt="Tigris Data"
                                width={150}
                                height={150}
                                className="ml-10 mr-10"
                            />
                            <Heading size="sm" className="mt-4">
                                {t("globalStorage")}
                            </Heading>
                        </Flex>
                        <Flex direction="col">
                            <Image
                                src={cf.src}
                                alt="CF"
                                width={200}
                                height={200}
                                className="ml-10 mr-10"
                            />
                            <Heading size="sm" className="mt-7">
                                {t("webappDist")}
                            </Heading>
                        </Flex>
                        <Flex direction="col">
                            <Image
                                src={bnuy.src}
                                alt="BNY"
                                width={200}
                                height={200}
                                className="ml-10 mr-10"
                            />
                            <Heading size="sm" className="mt-5">
                                {t("caching")}
                            </Heading>
                        </Flex>
                        <Flex direction="col">
                            <Image
                                src={cloudfront.src}
                                alt="ACF"
                                width={75}
                                height={75}
                                className="ml-10 mr-10 rounded-full"
                            />
                            <Heading size="sm" className="mt-1">
                                {t("fastStatic")}
                            </Heading>
                        </Flex>
                    </Center>
                </Card>
            </div>
        </>
    );
}
