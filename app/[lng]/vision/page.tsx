"use client";
import { useClientTranslation } from "@/app/i18n/client";
import { Button, Heading, Card, Center, Flex } from "@neodyland/ui";
import { useRouter } from "next/navigation";
import SpinningGallery from "@/app/ui/SpinningGallery";
import { FaPalette, FaLanguage } from "react-icons/fa";

import Image from "next/image";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "vision");
    const en = lng.split("-")[0] === "en";
    const router = useRouter();

    return (
        <>
            <div className="relative">
                    <Heading
                        className="flex justify-center items-center"
                        size="5xl"
                    >
                        {t("miknVision")}
                    </Heading>
                <Card className="mt-5">
                    <Heading size="4xl" className="text-center">{t("mission")}</Heading>
                    <Heading size="xl" className="text-center mt-3">{t("missionText")}</Heading>
                </Card>
                <Card className="mt-5">
                    <Heading size="4xl" className="text-center">{t("weStandFor")}</Heading>
                </Card>
            </div>
        </>
    );
}
