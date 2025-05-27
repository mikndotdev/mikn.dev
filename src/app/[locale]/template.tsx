"use client";
import { useTranslations } from "next-intl";
import { Header } from "@/components/nUI/Header";
import { Footer } from "@/components/nUI/Footer";
import Image from "next/image";
import mikanLogo from "@/assets/img/mikan.png";
import MikanCat from "@/assets/img/mikan-cat.png";
import KawaiiLogo from "@/assets/img/mikan-vtube.svg";
import { useRouter, usePathname } from "next/navigation";
import CookieConsent from "react-cookie-consent";
import { ReactNode } from "react";

import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { SiMisskey } from "react-icons/si";

export default function PagesLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("nav");

	const changeLanguage = () => {
		//@ts-ignore
		const pathSegments = pathname.split("/");
		if (pathSegments[1] === "en") {
			pathSegments[1] = "ja";
		} else if (pathSegments[1] === "ja") {
			pathSegments[1] = "en";
		}
		const newPath = pathSegments.join("/");
		router.push(newPath);
	};

	const nav = [
		{
			name: t("support"),
			href: "/contact",
		},
		{
			name: t("docs"),
			href: "https://docs.mikn.dev/",
		},
		{
			name: t("solutions"),
			href: "/solutions",
		},
		{
			name: t("legal"),
			href: "https://docs.mikn.dev/legal/",
		},
		{
			name: t("payments"),
			href: "https://payments.mikandev.com/",
		},
	];

	const social = [
		{
			name: "GitHub",
			href: "https://github.com/mikndotdev",
			color: "hover:text-github hover:bg-github",
			icon: FaGithub,
		},
		{
			name: "Twitter",
			href: "https://twitter.com/kunkunmaamo",
			color: "hover:text-twitter hover:bg-twitter",
			icon: FaTwitter,
		},
		{
			name: "Discord",
			href: "https://discord.gg/FZCN6fjPuG",
			color: "hover:text-discord hover:bg-discord",
			icon: FaDiscord,
		},
		{
			name: "Misskey Server",
			href: "https://ekaki.art/",
			color: "hover:text-misskey hover:bg-misskey",
			icon: SiMisskey,
		},
	];

	const links = [
		{
			name: t("resources"),
			children: [
				{
					name: t("payments"),
					href: "https://payments.mikandev.com/",
				},
				{
					name: t("solutions"),
					href: "https:/mikn.dev/solutions",
				},
				{
					name: t("blog"),
					href: "https://blog.mikn.dev/",
				},
			],
		},
		{
			name: t("support"),
			children: [
				{
					name: t("discord"),
					href: "https://discord.gg/FZCN6fjPuG",
				},
				{
					name: t("contact"),
					href: "https://mikn.dev/contact",
				},
			],
		},
		{
			name: t("legal"),
			children: [
				{
					name: t("terms"),
					href: "https://docs.mikn.dev/legal/terms",
				},
				{
					name: t("privacy"),
					href: "https://docs.mikn.dev/legal/privacy",
				},
				{
					name: t("jp-payments"),
					href: "https://docs.mikn.dev/legal/jp-payments",
				},
				{
					name: t("gdpr"),
					href: "https://docs.mikn.dev/legal/dpa",
				},
			],
		},
	];

	const buttons = [
		{
			href: "https://my.mikandev.com/init?url=https://mikn.dev",
			title: t("myAccount"),
		},
		{
			title: "🌎",
			onClick: () => {
				changeLanguage();
			},
		},
	];

	return (
		<>
			<Header
				navigation={nav}
				//@ts-ignore
				buttons={buttons}
				className="text-white"
				color="#FF9900"
				brand={{
					showTitle: false,
					name: "MikanDev",
					href: "/",
					logo: KawaiiLogo.src,
				}}
			/>
			<div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
				{children}
				<CookieConsent
					location="bottom"
					buttonText={t("accept")}
					cookieName="CookieConsent"
					style={{ background: "#ff9900" }}
					buttonStyle={{ color: "#261800", fontSize: "13px" }}
					expires={150}
					onDecline={() => {}}
				>
					{t("cookieConsent")}
				</CookieConsent>
			</div>
			<Footer
				social={social}
				links={links}
				copylight={`2020-${new Date().getFullYear()} MikanDev`}
				className="text-white font-thin bg-primary"
			>
				<div className="flex items-center self-end">
					<div className="tooltip tooltip-warning" data-tip=":3">
						<Image
							src={MikanCat.src}
							width={200}
							height={100}
							alt="MikanDev Tech"
							className="ml-2 mb-0"
						/>
					</div>
				</div>
			</Footer>
		</>
	);
}
