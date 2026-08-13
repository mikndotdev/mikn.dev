"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { Link } from "@/i18n/routing";
import { CategoryMetadata } from "@/constants/solutions";
import type { Solution } from "@/types/solutions";

interface SolutionCardProps {
  solution: Solution;
  animated?: boolean;
  compact?: boolean;
  className?: string;
}

const BRAND_BACKGROUND = "#331d00";
const BRAND_GLOW = "36 100 50";
const BRAND_COLORS = ["#ff9900", "#ff7700", "#ffb733"];

export function SolutionCard({
  solution,
  animated = false,
  compact = false,
  className = "",
}: SolutionCardProps) {
  const t = useTranslations();
  const { slug, name, description, icon, categories = [] } = solution;

  const IconComponent =
    typeof icon === "string"
      ? ({ className: c }: { className?: string }) => (
          <Image src={icon} alt={t(name)} width={40} height={40} className={c} />
        )
      : icon;

  if (compact) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-[10px] border border-primary/40 bg-card p-2 text-center">
        <IconComponent className="h-6 w-6 text-primary" />
        <span className="line-clamp-2 text-[9px] font-semibold leading-tight text-foreground">
          {t(name)}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/solutions/${slug}`}
      aria-label={t(name)}
      className={`group block h-full ${className}`}
    >
      <BorderGlow
        animated={animated}
        backgroundColor={BRAND_BACKGROUND}
        glowColor={BRAND_GLOW}
        colors={BRAND_COLORS}
        borderRadius={20}
        className="h-full"
      >
        <div className="flex h-full flex-col gap-4 p-6">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-primary/10 p-2">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>

          <div className="flex flex-grow flex-col gap-2">
            <h3 className="text-left text-xl font-bold text-foreground">{t(name)}</h3>
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              {t(description)}
            </p>
          </div>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const meta = CategoryMetadata[category];
                const CategoryIcon = meta.icon;
                return (
                  <span
                    key={category}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    <CategoryIcon className="h-3 w-3" />
                    {t(meta.name)}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </BorderGlow>
    </Link>
  );
}
