import { use } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { SolutionHero } from "@/components/SolutionHero";
import { SolutionList } from "@/constants/solutions";

export function generateStaticParams() {
  return SolutionList.map((solution) => ({ solution: solution.slug }));
}

export default function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; solution: string }>;
}) {
  const { locale, solution: slug } = use(params);
  setRequestLocale(locale);
  const t = useTranslations();

  const solution = SolutionList.find((entry) => entry.slug === slug);
  if (!solution) notFound();

  return (
    <SolutionHero
      name={t(solution.name)}
      source={solution.source}
      url={solution.url}
      cover={solution.cover}
    />
  );
}
