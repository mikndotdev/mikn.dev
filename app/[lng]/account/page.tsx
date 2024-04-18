"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
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
    const { t } = useClientTranslation(lng, "acc");
    const en = lng.split("-")[0] === "en";
    const {
        isAuthenticated,
        permissions,
        isLoading,
        user,
        accessToken,
        organization,
        userOrganizations,
        getPermission,
        getBooleanFlag,
        getIntegerFlag,
        getFlag,
        getStringFlag,
        getClaim,
        getAccessToken,
        getToken,
        getIdToken,
        getOrganization,
        getPermissions,
        getUserOrganizations,
    } = useKindeBrowserClient();

    console.log(getBooleanFlag("flag", false));

    console.log("accessToken", accessToken);
    console.log(getClaim("aud"));

    if (isLoading)
        return (
            <div>
                {" "}
                <Card>
                    <Heading
                        size="4xl"
                        className="flex justify-center items-center mb-10"
                    >
                        {t("load")}
                    </Heading>
                    <Loading size="lg" />
                </Card>
            </div>
        );

    return isAuthenticated ? (
        <div>
            <Card>
                <Heading
                    size="4xl"
                    className="flex justify-center items-center mb-5"
                >
                    MikanDev Account
                </Heading>
                <Heading
                    size="sm"
                    className="flex justify-center items-center mb-5"
                >
                    {t("logged_in")}
                </Heading>
                <Center>
                    <LogoutLink>
                        <Button colorScheme="primary" size="lg">
                            {t("buttons.logout")}
                        </Button>
                    </LogoutLink>
                </Center>
            </Card>
        </div>
    ) : (
        <div>
            <Card className="mb-20">
                <LoginLink>
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
                </LoginLink>
                <Heading
                    size="sm"
                    className="flex justify-center items-center mt-12 mb-5"
                >
                    {t("pls_login")}
                </Heading>
                <Center>
                    <LoginLink>
                        <Button colorScheme="primary" size="lg">
                            {t("buttons.login")}
                        </Button>
                    </LoginLink>
                </Center>
            </Card>
        </div>
    );
}