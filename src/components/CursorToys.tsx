"use client";
import { ICursorToys } from "@/interfaces/CursorToys";
import { FC } from "react";
import { useCursorToys } from "@/contexts/CursorToysContext";

import ClickSpark from "@/components/ClickSpark";
import SplashCursor from "@/components/SplashCursor";
import CustomCursor from "@/components/CustomCursor";
import TargetCursor from "@/components/TargetCursor";

export const CursorToys: FC<ICursorToys> = ({ children }) => {
  const { selectedToy } = useCursorToys();

  if (selectedToy === "spark") {
    return <ClickSpark sparkColor={"#FF9900"}>{children}</ClickSpark>;
  }

  return (
    <>
      {selectedToy === "splash" && <SplashCursor />}
      {selectedToy === "custom" && <CustomCursor />}
      {selectedToy === "target" && <TargetCursor hideDefaultCursor />}
      {children}
    </>
  );
};
