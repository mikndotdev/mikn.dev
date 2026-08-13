import { IconType } from "@icons-pack/react-simple-icons";
import { LucideIcon } from "lucide-react";

export interface Solution {
  slug: string;
  name: string;
  description: string;
  cover?: string;
  icon: string | IconType | LucideIcon;
  source: string;
  url?: string;
  categories?: Categories[];
}

export interface Solutions {
  solutions: Solution[];
}

export enum Categories {
  GAMES,
  DEVTOOLS,
  APIS,
  BOTS,
  APPS,
  UTILITIES,
  BETA,
  DEAD,
}

export interface CategoryMeta {
  name: string;
  icon: LucideIcon;
}
