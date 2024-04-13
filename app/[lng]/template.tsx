"use client";
import { Footer } from "../ui/footer";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useClientTranslation } from "../i18n/client";

import mikanLogo from "../assets/mikandev-circle.webp";

import {
    FaDiscord,
    FaGithub,
    FaMastodon,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

interface Props {
    params: {
        lng: string;
    };
}

export default function HomeTemplate({
    children,
    params,
}: { children: React.ReactNode, params: Props['params'] }) {

    const { lng } = params;
    const { t } = useClientTranslation(lng, "index");
    const en = lng.split("-")[0] === "en";

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

    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <Image
                        src={mikanLogo.src}
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full mr-5"
                    />
                    <NavbarItem isActive>
                        <Link href="/" aria-current="page">
                            MikanDev
                        </Link>
                    </NavbarItem>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem isActive>
                        <Link href="/services" aria-current="page">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/status" aria-current="page">
                            Status
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/blog" aria-current="page">
                            Blog
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/donate" aria-current="page">
                            Donate
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
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
