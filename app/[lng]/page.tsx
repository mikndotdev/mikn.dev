"use client";
import { TypewriterEffect } from "../ui/type";
import { useClientTranslation } from "../i18n/client";
import { Heading } from "../ui/heading";
import Image from "next/image";
import { Button } from "@nextui-org/button";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { t } = useClientTranslation(lng, "index");
    const en = lng.split("-")[0] === "en";

    const words = [
        {
          text: t("Sweet"),
        },
        {
            text: t("And"),
        },
        {
            text: t("Juicy"),
          className: "text-orange-500 dark:text-orange-500",
        },
      ];

    return (
        <>
        <div className="relative">
            <TypewriterEffect words={words} />
            <Button>{t("buttons.click_me")}</Button>
        </div>
        </>
    );
}
