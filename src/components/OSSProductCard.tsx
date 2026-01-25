import { useTranslations } from "next-intl";
import { Globe, type LucideIcon } from "lucide-react";
import { IconType } from "@icons-pack/react-simple-icons";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface IOSSProductCardProps {
  name: string;
  description: string;
  tags?: string[];
  icon: LucideIcon | string | IconType;
  repoUrl: string;
  websiteUrl?: string;
}

export function OSSProductCard({
  name,
  description,
  icon,
  repoUrl,
  websiteUrl,
  tags,
}: IOSSProductCardProps) {
  const t = useTranslations("ossProducts");

  const IconComponent =
    typeof icon === "string"
      ? () => (
          <Image
            src={icon}
            alt={name}
            width={48}
            height={48}
            className="rounded-lg"
          />
        )
      : icon;

  return (
    <Card className="flex flex-col w-full h-full bg-card/50 backdrop-blur-sm border-muted/50 transition-all hover:bg-card/80 hover:border-primary/20">
      <CardHeader className="flex-col items-start gap-4 pb-2 px-6">
        <div className="p-2 bg-muted/50 rounded-xl">
          <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-2 px-6">
        <CardTitle className="text-xl md:text-2xl font-bold mb-2 text-left">
          {name}
        </CardTitle>
        <p className="text-muted-foreground text-left text-sm md:text-base leading-relaxed">
          {description}
        </p>
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant={"default"}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-4 px-6 items-start">
        <Link href={repoUrl} target="_blank" className="w-full">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 h-auto py-2 hover:bg-primary/10 hover:text-primary"
          >
            <SiGithub className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t("viewRepo")}</span>
          </Button>
        </Link>
        {websiteUrl && (
          <Link href={websiteUrl} target="_blank" className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 h-auto py-2 hover:bg-primary/10 hover:text-primary"
            >
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span>{t("visitSite")}</span>
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
