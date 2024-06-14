"use client";
import { TypewriterEffect } from "@/app/ui/type";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex, Text } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import { Vortex } from "@/app/ui/vortex";
import Link from "next/link";
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

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

import { FaQuestionCircle } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

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
    { markerOffset: -27, name: "HKG", coordinates: [118, 20] },
    { markerOffset: -27, name: "HEL", coordinates: [28, 60] },
    { markerOffset: -27, name: "LON", coordinates: [0, 50] },
    { markerOffset: -27, name: "LAX", coordinates: [-120, 35] },
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
            name: "HND1",
            place: t("tyo"),
            provider: t("cntb"),
            count: 2,
        },
        {
            name: "HND2",
            place: t("tyo"),
            provider: t("cnh"),
            count: 1,
        },
        {
            name: "HND3",
            place: t("tyo"),
            provider: t("aws"),
            count: 1,
        },
        {
            name: "HKG",
            place: t("hkg"),
            provider: t("albb"),
            count: 1,
        },
        {
            name: "HEL",
            place: t("hel"),
            provider: t("htzn"),
            count: 1,
        },
        {
            name: "LON",
            place: t("lon"),
            provider: t("aws"),
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
            name: "LAX",
            place: t("lax"),
            provider: t("ndn"),
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
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            center: [0, 50],
                            scale: 120,
                        }}
                    >
                        <Geographies
                            geography="https://cdn.mikandev.tech/public-assets/utils/geo.min.json"
                            fill="#FF9900"
                            stroke="#FF9900"
                        >
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: { rsmKey: any }) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                    />
                                ))
                            }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <g
                                    fill="none"
                                    stroke="#3CF6E7"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(-12, -24) scale(0.7)"
                                >
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                </g>
                                <text
                                    textAnchor="middle"
                                    y={markerOffset}
                                    x={-3}
                                    style={{
                                        fontFamily: "Inter",
                                        fill: "#FFFFFF",
                                        fontSize: "7px",
                                    }}
                                >
                                    {name}
                                </text>
                            </Marker>
                        ))}
                        {soonmarkers.map(
                            ({ name, coordinates, markerOffset }) => (
                                <Marker key={name} coordinates={coordinates}>
                                    <g
                                        fill="none"
                                        stroke="#F96666"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(-12, -24) scale(0.7)"
                                    >
                                        <circle cx="12" cy="10" r="3" />
                                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                    </g>
                                    <text
                                        textAnchor="middle"
                                        y={markerOffset}
                                        x={-3}
                                        style={{
                                            fontFamily: "Inter",
                                            fill: "#FFFFFF",
                                            fontSize: "7px",
                                        }}
                                    >
                                        {name}
                                    </text>
                                </Marker>
                            ),
                        )}
                    </ComposableMap>
                    <Flex direction="row">
                        <LuMapPin
                            fontSize={30}
                            className="ml-5 lg:ml-10"
                            color="#3CF6E7"
                        />
                        <Text className="text-white">
                            {t("inHouseServers")}
                        </Text>
                    </Flex>
                    <Flex direction="row" className="mt-2">
                        <LuMapPin
                            fontSize={30}
                            className="ml-5 lg:ml-10"
                            color="#F96666"
                        />
                        <Text className="text-white">{t("cloudPoP")}</Text>
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
