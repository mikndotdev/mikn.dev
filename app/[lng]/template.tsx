"use client";
import { Header, Footer } from "@neodyland/ui";
import Image from "next/image";
import mikanLogo from "../assets/mikandev-circle.webp";

const nav = [
    {
        name: "ホーム",
        href: "/",
    },
    {
        name: "サポート",
        href: "https://neody.land/to?support",
    },
    {
        name: "利用規約",
        href: "https://neody.land/terms",
    },
    {
        name: "プライバシーポリシー",
        href: "https://neody.land/privacy",
    },
];
import {
    FaDiscord,
    FaGithub,
    FaMastodon,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const social = [
    {
        name: "GitHub",
        href: "https://github.com/neodyland",
        color: "hover:text-github hover:bg-github",
        icon: FaGithub,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/neodyland",
        color: "hover:text-twitter hover:bg-twitter",
        icon: FaTwitter,
    },
    {
        name: "Discord",
        href: "https://neody.land/to?discord",
        color: "hover:text-discord hover:bg-discord",
        icon: FaDiscord,
    },
    {
        name: "Youtube",
        href: "https://neody.land/to?youtube",
        color: "hover:text-youtube hover:bg-youtube",
        icon: FaYoutube,
    },
    {
        name: "Mastodon",
        href: "https://neody.land/to?misskey",
        color: "hover:text-misskey hover:bg-misskey",
        icon: FaMastodon,
    },
];

const links = [
    {
        name: "Resouces",
        children: [
            {
                name: "About us",
                href: "https://neody.land/about",
            },
            {
                name: "Partners",
                href: "https://neody.land/partners",
            },
            {
                name: "Services",
                href: "https://neody.land/services",
            },
            {
                name: "News",
                href: "https://neody.land/news",
            },
        ],
    },
    {
        name: "Support",
        children: [
            {
                name: "Neodyland",
                href: "https://neody.land/to?discord",
            },
            {
                name: "Artifacter",
                href: "https://neody.land/to?discord",
            },
            {
                name: "Glow-bot",
                href: "https://neody.land/to?discord",
            },
            {
                name: "MakeItAQuote",
                href: "https://neody.land/to?discord",
            },
        ],
    },
    {
        name: "Legal",
        children: [
            {
                name: "Terms of use",
                href: "https://neody.land/terms",
            },
            {
                name: "Privacy policy",
                href: "https://neody.land/privacy",
            },
            {
                name: "Payments",
                href: "https://neody.land/payments",
            },
        ],
    },
];

const buttons = [
    {
        href: "/invite",
        title: "botを招待",
    },
];

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <>
            <Header
                navigation={nav}
                buttons={buttons}
                brand={{
                    showTitle: true,
                    name: "MikanDev",
                    href: "/",
                    logo: mikanLogo.src,
                }}
            />
            <div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
                {children}
            </div>
            <Footer social={social} links={links}>
                <div className="flex items-center self-end">
                    <a
                        href="https://mikn.link/gpus"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="https://cdn.mikn.dev/branding/GPUComputeBy.png"
                            width={400}
                            height={30}
                            alt="MikanDev Tech Logo"
                            className="ml-2"
                        />
                    </a>
                </div>
            </Footer>
        </>
    );
}
