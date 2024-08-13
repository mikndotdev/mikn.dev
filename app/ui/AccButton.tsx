"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Heading, Center, Flex } from "@neodyland/ui";

import mikan from "@/app/assets/mikan.png";
import { PiSpinnerBold } from "react-icons/pi";

interface AccButtonProps {
    children?: React.ReactNode;
}

const AnimatedButton = ({
    onClick,
    status,
}: {
    onClick: () => void;
    status: "authenticated" | "loading" | "unauthenticated";
}) => {
    let buttonContent;
    let buttonClass =
        "py-1 px-1 border-2 rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center";

    switch (status) {
        case "authenticated":
            buttonContent = (
                <Image src={mikan.src} alt="MikanDev" width={50} height={50} />
            );
            buttonClass += " bg-primary";
            break;
        case "unauthenticated":
            buttonContent = (
                <Image src={mikan.src} alt="MikanDev" width={50} height={50} />
            );
            buttonClass += " bg-red-500";
            break;
        case "loading":
            buttonContent = (
                <PiSpinnerBold className="animate-spin text-white" size={40} />
            );
            buttonClass += " bg-gray-500";
            break;
    }

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
                scale: 0.8,
                borderRadius: "100%",
            }}
        >
            <div className={buttonClass} onClick={onClick}>
                {buttonContent}
            </div>
        </motion.div>
    );
};

const discordtoCDN = async (url: string, id: string) => {
    const image = await fetch(`${url}?size=1024`);
    const file = await image.blob();
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`/api/pfp?id=${id}`, {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        const data = await res.json();
        return data.url;
    }
    return null;
};

export default function AccButton({ children }: AccButtonProps) {
    const [open, setOpen] = useState(false);
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleClick = () => {
        if (status === "unauthenticated") {
            signIn("logto");
        } else {
            setOpen(!open);
        }
    };

    useEffect(() => {
        if (searchParams?.get("update") === "true") {
            update();
        }
    }, [searchParams, session]);

    if (status === "authenticated") {
        if (
            !session.user.name ||
            session.user.image == null ||
            !session.user.image.startsWith("https://cdn.mdusercontent.com/")
        ) {
            if (pathname?.endsWith("account")) {
                return;
            }
            router.push(
                `https://mikn.dev/account?onboarding=true&redirect=${window.location.origin}${pathname}`,
            );
        }
        if (session.user.image.startsWith("https://cdn.discordapp.com/")) {
            discordtoCDN(session.user.image, session.user.id).then((url) => {
                if (url) {
                    session.user.image = url;
                }
                update();
            });
        }
    }

    return (
        <div className="fixed z-50 bottom-10 left-10">
            <AnimatedButton onClick={handleClick} status={status} />
            <AnimatePresence>
                {open && status === "authenticated" && (
                    <motion.div
                        initial={{ opacity: 0, y: 7 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 7 }}
                        className="absolute bottom-full mb-5 bg-white shadow-lg rounded-lg p-4 w-80"
                    >
                        <Center>
                            <Heading size="md" className="text-primary mb-5">
                                MikanDev Account
                            </Heading>
                        </Center>
                        <Center>
                            <Image
                                src={session.user.image}
                                alt="MikanDev"
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                        </Center>
                        <Center className="mt-5">
                            <Heading size="sm" className="text-primary">
                                {session.user.name}
                            </Heading>
                        </Center>
                        <Center>
                            <Heading
                                size="sm"
                                className="text-primary mt-2 mb-5"
                            >
                                UID {session.user.id}
                            </Heading>
                        </Center>
                        <ul>
                            <li
                                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                                onClick={() =>
                                    router.push("https://mikn.dev/account")
                                }
                            >
                                Profile
                            </li>
                            <li
                                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                                onClick={() => signOut()}
                            >
                                Logout
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
}
