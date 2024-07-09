"use client";
import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
    Card,
    Heading,
    Button,
    Center,
    useToast,
    ToastProvider,
    AlertDialog,
    AlertDialogDescription,
    AlertDialogFooter,
    FileInput,
} from "@neodyland/ui";
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
    const { data: session, status, update } = useSession();
    const [IsLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const hasWelcomedBack = useRef(false);
    const { t } = useClientTranslation(lng, "acc");
    const en = lng.split("-")[0] === "en";
    const toast = useToast();

    const welcomeBack = (): void => {
        toast.open({
            title: t("welcomeBack"),
            description: t("welcomeBackBlurb"),
            type: "success",
        });
    };

    const upload = async () => {
        setOpen(false);
        if (file) {
            toast.open({
                title: t("uploading"),
                description: t("uploadingBlurb"),
                type: "success",
            });
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch(`/api/pfp?id=${session?.user?.id}`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const data = await res.json();
                if (data.sessionShouldBeRefreshed) {
                    await update();
                }
                toast.open({
                    title: t("success"),
                    description: t("successBlurb"),
                    type: "success",
                });
            } else {
                toast.open({
                    title: t("error"),
                    description: t("errorBlurb"),
                    type: "error",
                });
            }
        } else {
            toast.open({
                title: t("error"),
                description: t("errorBlurb"),
                type: "error",
            });
        }
    };

    useEffect(() => {
        if (session && status === "authenticated" && !hasWelcomedBack.current) {
            welcomeBack();
            hasWelcomedBack.current = true;
        }
    }, [session, status, welcomeBack]);

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
            <AlertDialog open={open} onClose={() => setOpen(false)}>
                <AlertDialogDescription className="text-center">
                    {t("changePFP")}
                </AlertDialogDescription>
                <FileInput
                    className="mt-2 mb-2"
                    accept="image/jpeg, image/png, image/gif"
                    colorScheme={"secondary"}
                    onChange={(e) => {
                        const selectedFile = e.target.files?.[0];
                        if (selectedFile) {
                            setFile(selectedFile);
                        }
                    }}
                />
                <Center>
                    <AlertDialogFooter
                        actionText={t("upload")}
                        cancelText={t("cancel")}
                        actionColor="success"
                        onAction={() => upload()}
                        onCancel={() => setOpen(false)}
                    />
                </Center>
            </AlertDialog>
            <ToastProvider>
                <Card className="mt-3 mb-3 flex items-center justify-between">
                    <div>
                        <Heading
                            size="5xl"
                            className="mb-5 justify-center text-primary mb-5"
                        >
                            MikanDev Account
                        </Heading>
                        <Heading size="4xl" className="mb-2">
                            {session.user?.name}
                        </Heading>
                        <Heading size="sm" className="mb-2">
                            {session.user?.email}
                        </Heading>
                        <Heading size="sm" className="mb-2">
                            {session.user?.discord}
                        </Heading>
                    </div>
                    <Image
                        src={
                            `${session.user?.image}?size=1024` ||
                            `https://cdn.statically.io/avatar/${session.user?.name}`
                        }
                        width={200}
                        height={200}
                        alt="User Image"
                        className="rounded-full ml-4 transition-all duration-300 hover:brightness-50"
                        onClick={() => setOpen(true)}
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
            </ToastProvider>
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
                            alt="MikanDev Logo"
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
