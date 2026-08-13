"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import StrokeText from "@/components/StrokeText";
import Aurora from "@/components/Aurora";
import { Button } from "@/components/ui/button";

interface SolutionHeroProps {
  name: string;
  source: string;
  url?: string;
  cover?: string;
}

export function SolutionHero({ name, source, url, cover }: SolutionHeroProps) {
  const t = useTranslations("ossProducts");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setRevealed(true), 6000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden rounded-3xl border border-primary/20">
      <div className="absolute inset-0 z-0">
        {cover ? (
          <Image src={cover} alt={name} fill priority sizes="100vw" className="object-cover" />
        ) : (
          <Aurora amplitude={1.1} blend={0.6} />
        )}
      </div>

      <div
        className={`absolute inset-0 z-[1] ${cover ? "bg-background/60" : "bg-background/20"}`}
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-20 text-center">
        <StrokeText
          text={name}
          trigger="mount"
          fillMode="wipe"
          fontSize={100}
          strokeColor="#ff9900"
          fillColor="#ffffff"
          onComplete={() => setRevealed(true)}
          className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        />

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div
            className={`transition-all duration-700 ease-out ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Link href={source} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <SiGithub />
                {t("viewRepo")}
              </Button>
            </Link>
          </div>

          {url && (
            <div
              className={`transition-all duration-700 ease-out ${
                revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: revealed ? "120ms" : "0ms" }}
            >
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  <Globe />
                  {t("visitSite")}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
