"use client";
import { useTranslations } from "next-intl";
import { useSwetrix } from "@swetrix/nextjs";
import { ReactNode } from "react";
import { CursorToys } from "@/components/CursorToys";
import SettingsController from "@/components/SettingsController";
import { Footer } from "@/components/mikn/Footer";
import { Header } from "@/components/mikn/Header";

import { Github } from "lucide-react";
import MikanCat from "@/assets/img/mikan-cat.png";
import Logo from "@/assets/img/mikan-vtube.svg";

import Image from "next/image";

export default function PagesLayout({ children }: { children: ReactNode }) {
  useSwetrix("XxNIMaHCaVG3", { apiURL: "https://analytics.mikandev.tech/log" });
  const t = useTranslations("layout");

  const social = [
    {
      name: "GitHub",
      href: "https://github.com/mikndotdev",
      color: "hover:text-github hover:bg-github",
      icon: Github,
    },
  ];

  const links = [
    {
      name: t("resources"),
      children: [
        {
          name: t("accountCenter"),
          href: "https://account.mikandev.com/",
        },
        {
          name: t("solutions"),
          href: "/solutions",
        },
      ],
    },
    {
      name: t("support"),
      children: [
        {
          name: t("contact"),
          href: "/contact",
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
          name: t("refunds"),
          href: "https://docs.mikn.dev/legal/refunds",
        },
        {
          name: t("jp-payments"),
          href: "https://docs.mikn.dev/legal/jp-payments",
        },
      ],
    },
  ];

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("solutions"), href: "/solutions" },
    { name: t("contact"), href: "/contact" },
    { name: t("vision"), href: "/vision" },
    { name: t("opensource"), href: "/opensource" },
  ];

  return (
    <>
      <CursorToys>
        <Header
          brand={{
            name: "MikanDev",
            href: "/",
            logo: Logo.src,
            showTitle: false,
          }}
          navigation={navigation}
          color={"#FF7700"}
        />
        <div className={"py-24 px-4 md:px-30"}>{children}</div>
        <SettingsController />
        <Footer
          social={social}
          links={links}
          copyright={`2020-${new Date().getFullYear()} MikanDev`}
          className="text-white font-bold bg-secondary"
        >
          <div className="flex items-center self-end">
            <Image
              src={MikanCat.src}
              width={200}
              height={100}
              alt=":3"
              className="ml-2 mb-0"
            />
          </div>
        </Footer>
      </CursorToys>
    </>
  );
}
