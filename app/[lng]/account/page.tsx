"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Card, Heading, Button, Center } from "@neodyland/ui";
import { useClientTranslation } from "@/app/i18n/client";
import { PinContainer } from "@/app/ui/pin";
import Loading from "@/app/ui/spinner-mask";
import Image from "next/image";
import mikanMascot from "@/app/assets/MikanMascotFull.png";

interface Props {
    params: {
        lng: string;
    };
}

export default function Home({ params: { lng } }: Props) {
    const { data: session, status } = useSession();
    const [IsLoading, setIsLoading] = useState(false);
    const { t } = useClientTranslation(lng, "acc");
    const en = lng.split("-")[0] === "en";

    if (status === "loading") {
        return (
            <div>
                <Card>
                    <Heading
                        size="4xl"
                        className="flex justify-center items-center"
                    >
                        {t("load")}
                    </Heading>
                    <Loading size="lg" />
                </Card>
            </div>
        );
    }

    if (IsLoading) {
        return (
            <div>
                <Card>
                    <Heading
                        size="4xl"
                        className="flex justify-center items-center"
                    >
                        {t("plsWait")}
                    </Heading>
                    <Loading size="lg" />
                </Card>
            </div>
        );
    }

    return session ? (
        <div>
            <Card className="mt-3 mb-3 flex items-center justify-between">
                <div>
                    <Heading
                        size="5xl"
                        className="mb-5 justify-center text-primary mb-10"
                    >
                        MikanDev Account
                    </Heading>
                    <Heading size="4xl" className="mb-5">
                        {session.user?.name}
                    </Heading>
                    <Heading size="sm" className="mb-5">
                        {session.user?.email}
                    </Heading>
                </div>
                <Image
                    src={
                        session.user?.image + "?size=1024" ||
                        `https://cdn.statically.io/avatar/${session.user?.name}`
                    }
                    width={200}
                    height={200}
                    alt="User Image"
                    className="rounded-full ml-4"
                />
            </Card>
            <Button
                colorScheme="primary"
                size="lg"
                onClick={() => {
                    setIsLoading(true);
                    signOut();
                }}
            >
                {t("buttons.logout")}
            </Button>
        </div>
    ) : (
        <div>
            <Card className="mb-20">
                <PinContainer title={t("blurb3")}>
                    <div className="flex basis-full flex-col p-4 justify-center items-center text-slate-100 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 text-slate-100">
                            {t("blurb1")}
                        </h3>
                        <div className="">
                            <h4 className="text-slate-100 justify-center items-center">
                                {t("blurb2")}
                            </h4>
                        </div>
                        <Image
                            src={mikanMascot.src}
                            width={200}
                            height={100}
                            alt="MikanDev Tech Logo"
                            className="ml-2 mb-0 mt-10"
                        />
                    </div>
                </PinContainer>
                <Heading
                    size="sm"
                    className="flex justify-center items-center mt-12 mb-5"
                >
                    {t("pls_login")}
                </Heading>
                <Center>
                    <Button
                        colorScheme="primary"
                        size="lg"
                        onClick={() => {
                            setIsLoading(true);
                            signIn("logto");
                        }}
                    >
                        {t("buttons.login")}
                    </Button>
                </Center>
            </Card>
        </div>
    );
}
