"use client";
import { TypewriterEffect } from "../ui/type";
import { useClientTranslation } from "../i18n/client";
import { Button, Heading, Card, Center } from "@neodyland/ui";

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
            <Card className="mt-20">
                <Center className="mt-5">
                    <TypewriterEffect words={words} className="" />
                </Center>
                <Heading
                    className="flex justify-center items-center mt-3"
                    size="md"
                >
                    {t("below-main-heading")}
                </Heading>
                <Center className="mt-7 mb-5">
                    <Button colorScheme="primary" className="mr-3 animate-bounce">
                        {t("buttons.check_out")}
                    </Button>
                    <Button colorScheme="secondary" className="ml-3">
                        {t("buttons.account")}
                    </Button>
                </Center>

                    </Card>
            </div>
        </>
    );
}
