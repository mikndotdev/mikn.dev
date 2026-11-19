"use client";

import { useEffect, useState } from "react";
import Folder from "@/components/Folder";
import { SolutionCard } from "@/components/SolutionCard";
import { SolutionList } from "@/constants/solutions";
import type { Solution } from "@/types/solutions";

function pickRandom<T>(items: T[], count: number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export function SolutionsFolder({
  className = "",
  onOpenChange,
}: {
  className?: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const [picks, setPicks] = useState<Solution[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPicks(pickRandom(SolutionList, 3));
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  const items = picks.map((solution) => (
    <SolutionCard key={solution.name} solution={solution} compact />
  ));

  return (
    <div
      className={`transition-transform duration-300 ease-in-out ${
        open ? "translate-y-20" : ""
      } ${className}`}
    >
      <Folder size={2} items={items} onOpenChange={handleOpenChange} />
    </div>
  );
}
