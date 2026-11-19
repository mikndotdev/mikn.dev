"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, MotionConfig } from "motion/react";
import { EyeOff, HandHeart, Network, PiggyBank, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import DecryptedText from "@/components/DecryptedText";
import ScrollFloat from "@/components/ScrollFloat";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const philosophyKeys = ["description1", "description2", "description3", "description4"] as const;

const values = [
  { key: "foreverFree", icon: HandHeart },
  { key: "noBS", icon: EyeOff },
  { key: "selfFunded", icon: PiggyBank },
] as const;

export default function VisionPage() {
  const t = useTranslations("vision");

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex flex-col items-center w-full max-w-5xl mx-auto gap-20 md:gap-28 mt-10">
        <section className="flex flex-col items-center text-center gap-8">
          <DecryptedText
            text={t("title")}
            animateOn="view"
            revealDirection="center"
            speed={50}
            maxIterations={20}
            useOriginalCharsOnly
            sequential
            className="text-4xl md:text-6xl font-bold text-white"
            parentClassName="text-4xl md:text-6xl font-bold text-white"
          />
          <blockquote className="relative max-w-3xl">
            <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-3xl font-semibold leading-snug">
              {t("philosophy.blurb1")}
            </p>
          </blockquote>
        </section>

        <section className="flex flex-col w-full gap-10">
          {philosophyKeys.map((key, i) => (
            <div key={key} className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="font-mono font-bold text-3xl md:text-4xl text-primary shrink-0 md:w-16">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {t(`philosophy.${key}`)}
              </p>
            </div>
          ))}
          <p className="text-lg md:text-xl font-bold text-primary text-center mt-4">
            {t("philosophy.footnote")}
          </p>
        </section>

        <section className="flex flex-col items-center w-full gap-8">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center font-bold"
            textClassName="text-3xl md:text-4xl"
          >
            {t("values.title")}
          </ScrollFloat>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 w-full gap-4"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.06 }}
          >
            {values.map(({ key, icon: Icon }) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  shown: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <Card className="h-full bg-card/50 border-muted/50">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="p-2 bg-muted/50 rounded-xl w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`values.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Card className="w-full bg-inherit border-primary border-4">
          <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 text-center md:text-left">
            <Network className="w-16 h-16 text-primary shrink-0" />
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {t("independentInfra.title")}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.rich("independentInfra.description", {
                  link: (chunks) => (
                    <Link
                      href="https://neody.ad.jp"
                      target="_blank"
                      className="text-primary font-semibold underline underline-offset-4"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </MotionConfig>
  );
}
