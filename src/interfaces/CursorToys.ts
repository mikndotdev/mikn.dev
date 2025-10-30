import { ReactNode } from "react";

export interface ICursorToys {
  children?: ReactNode;
  selectedToy?: "none" | "spark" | "splash" | "custom" | "target";
}
