"use client";

import { useTranslations } from "next-intl";

import { SolutionCard } from "@/components/SolutionCard";
import { SolutionList } from "@/constants/solutions";

export default function SolutionsPage() {
  const t = useTranslations("solutions");

  return (
    <main>
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-white lg:text-6xl">{t("title")}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SolutionList.map((solution) => (
          <SolutionCard key={solution.name} solution={solution} />
        ))}
      </div>
    </main>
  );
}
