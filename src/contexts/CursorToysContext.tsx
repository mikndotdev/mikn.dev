"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SelectedToy = "none" | "spark" | "splash" | "custom" | "target";

interface CursorToysContextType {
  selectedToy: SelectedToy;
  setSelectedToy: (value: SelectedToy) => void;
}

const CursorToysContext = createContext<CursorToysContextType | undefined>(
  undefined,
);

export const CursorToysProvider = ({ children }: { children: ReactNode }) => {
  const [selectedToy, setSelectedToyState] = useState<SelectedToy>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cursorToy") as SelectedToy;
      return stored &&
        ["none", "spark", "splash", "custom", "target"].includes(stored)
        ? stored
        : "none";
    }
    return "none";
  });

  const setSelectedToy = (value: SelectedToy) => {
    setSelectedToyState(value);
    localStorage.setItem("cursorToy", value);
  };

  return (
    <CursorToysContext.Provider value={{ selectedToy, setSelectedToy }}>
      {children}
    </CursorToysContext.Provider>
  );
};

export const useCursorToys = () => {
  const context = useContext(CursorToysContext);
  if (!context)
    throw new Error("useCursorToys must be used within CursorToysProvider");
  return context;
};
