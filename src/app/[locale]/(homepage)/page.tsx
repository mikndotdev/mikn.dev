"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/animate-ui/components/buttons/button";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import CircularText from "@/components/CircularText";
import DecryptedText from "@/components/DecryptedText";
import CurvedLoop from "@/components/CurvedLoop";
import ScrollFloat from "@/components/ScrollFloat";
import SplitText from "@/components/SplitText";
import { OSSProductCard } from "@/components/OSSProductCard";
import { VRM } from "@/components/vrm";
import { IdCard } from "lucide-react";

import NeodyLogo from "@/assets/img/NeodyLogo.png";
import KuronekoLogo from "@/assets/img/kuroneko.png";
import RTLogo from "@/assets/img/rt.png";
import TakasumiLogo from "@/assets/img/takasumi.png";
import KaraSnapIcon from "@/assets/img/karasnap.png";

export default function IndexPage() {
  const t = useTranslations("home");
  const [showCircularText, setShowCircularText] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="min-h-screen w-full flex items-center justify-center relative">
        <div className="absolute inset-0 z-[-1]"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-4 md:px-30">
          <div className="flex flex-col text-center md:text-left flex-1 space-y-2 md:space-y-4 max-w-full">
            <p className="text-lg md:text-2xl font-bold">{t("hero.blurb1")}</p>
            <SplitText
              text={t("hero.blurb2")}
              className="text-4xl md:text-6xl font-semibold"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={() => setShowCircularText(true)}
            />
            <p className="text-lg md:text-2xl">{t("hero.blurb3")}</p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
              <Link href={"/solutions"}>
                <Button variant="default" size="lg">
                  {t("hero.primaryCta")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center aspect-square w-full max-w-sm md:max-w-md flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <CircularText
                text={t("hero.circularText")}
                spinDuration={20}
                startAnimation={showCircularText}
                size={400}
                fontSize={28}
                radius={160}
              />
            </div>
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <VRM />
            </div>
          </div>
        </div>
      </div>

      <CurvedLoop
        marqueeText={t("hero.loop")}
        speed={3}
        curveAmount={200}
        direction="right"
        interactive={true}
        className=""
      />

      <div className="flex flex-col justify-center items-center pb-24 px-4 w-full max-w-7xl mx-auto gap-12 md:gap-24">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="text-center font-bold mt-3">
            <DecryptedText
              text={t("OpenSource")}
              animateOn="view"
              revealDirection="center"
              speed={50}
              maxIterations={20}
              useOriginalCharsOnly
              sequential
              className="text-3xl md:text-4xl font-bold"
              parentClassName="text-3xl md:text-4xl font-bold"
            />
          </div>
          <h3 className="text-lg md:text-xl text-gray-400 text-center w-full md:w-11/12">
            {t("OpenSourceBlurb")}
          </h3>
          <div className={"grid grid-cols-1 md:grid-cols-2 w-full mt-5 gap-4"}>
            <OSSProductCard
              name={t("ossProducts.karaSnap.title")}
              description={t("ossProducts.karaSnap.description")}
              icon={KaraSnapIcon.src}
              repoUrl="https://github.com/mikndotdev/karasnap"
              websiteUrl="https://karasnap.mikn.dev"
            />
            <OSSProductCard
              name={t("ossProducts.nextDiscordAuth.title")}
              description={t("ossProducts.nextDiscordAuth.description")}
              icon={IdCard}
              repoUrl="https://github.com/mikndotdev/next-discord-auth"
              websiteUrl="https://npm.im/@mikandev/next-discord-auth"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center font-bold mt-3"
            textClassName="text-3xl md:text-4xl"
          >
            {t("WorkWithBest")}
          </ScrollFloat>
          <h3 className="text-lg md:text-xl text-gray-400 text-center w-full md:w-11/12">
            {t("WorkWithBestBlurb")}
          </h3>

          <SimpleMarquee className="mt-10 w-full" baseVelocity={1}>
            <div className="flex items-center">
              <Link href={"https://neody.land"} target="_blank">
                <Image
                  src={NeodyLogo.src}
                  alt={"Neody"}
                  width={150}
                  height={50}
                  className="mx-8 md:mx-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
                />
              </Link>
              <Link href={"https://rt.neody.land"} target="_blank">
                <Image
                  src={RTLogo.src}
                  alt={"RT"}
                  width={50}
                  height={50}
                  className="mx-8 md:mx-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
                />
              </Link>
              <Link href={"https://kuroneko6423.com"} target="_blank">
                <Image
                  src={KuronekoLogo.src}
                  alt={"Kuroneko"}
                  width={50}
                  height={50}
                  className="mx-8 md:mx-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
                />
              </Link>
              <Link href={"https://takasumibot.com"} target="_blank">
                <Image
                  src={TakasumiLogo.src}
                  alt={"Takasumi"}
                  width={50}
                  height={50}
                  className="mx-8 md:mx-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
                />
              </Link>
            </div>
          </SimpleMarquee>
        </div>
      </div>
    </main>
  );
}
