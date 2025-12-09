"use client";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { useTranslations } from "next-intl";
import { useState } from "react";

import SplitText from "@/components/SplitText";
import { VRM } from "@/components/vrm";
import CircularText from "@/components/CircularText";
import Link from "next/link";

export default function IndexPage() {
  const t = useTranslations("home");
  const [showCircularText, setShowCircularText] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-12 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
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
    </>
  );
}
