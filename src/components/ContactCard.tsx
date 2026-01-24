import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface IContactCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  contactItems: IContactItem[];
  actionButton?: {
    href: string;
    label: string;
  };
}

export interface IContactItem {
  icon: LucideIcon;
  text: string;
  title?: string;
  href?: string;
}

export function ContactCard({
  icon: Icon,
  title,
  description,
  contactItems,
  actionButton,
}: IContactCardProps) {
  return (
    <Card className="flex flex-col w-full h-full bg-card/50 backdrop-blur-sm border-muted/50 transition-all hover:bg-card/80 hover:border-primary/20">
      <CardHeader className="flex-col items-start gap-4 pb-2 px-6">
        <div className="p-2 bg-muted/50 rounded-xl">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-2 px-6">
        <CardTitle className="text-xl md:text-2xl font-bold mb-2 text-left">
          {title}
        </CardTitle>
        {description && (
          <p className="text-muted-foreground text-left text-sm md:text-base leading-relaxed mb-4">
            {description}
          </p>
        )}
        <div className="flex flex-col gap-3">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 cursor-help group"
              title={item.title}
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  className="text-base md:text-xl hover:text-primary transition-colors"
                >
                  {item.text}
                </Link>
              ) : (
                <span className="text-base md:text-xl">{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      {actionButton && (
        <CardFooter className="pt-4 px-6">
          <Link href={actionButton.href} target="_blank" className="w-full">
            <Button className="w-full">{actionButton.label}</Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
