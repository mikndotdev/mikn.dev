"use client";
import { useCursorToys } from "@/contexts/CursorToysContext";
import TargetCursor from "@/components/TargetCursor";

export default function GlobalCursorToys() {
  const { selectedToy } = useCursorToys();

  if (selectedToy === "target") {
    return <TargetCursor />;
  }

  return null;
}
