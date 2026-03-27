import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  Headset,
  CreditCard,
  AlertTriangle,
  Gamepad2,
} from "lucide-react";

import { ContactCard } from "@/components/ContactCard";

export default function ContactPage() {
  const t = useTranslations("contact");

  const contactCards = [
    {
      icon: Mail,
      title: t("mail"),
      contactItems: [
        {
          icon: Headset,
          text: "hello@mikn.dev",
          title: t("general-support"),
          href: "mailto:hello@mikn.dev",
        },
        {
          icon: CreditCard,
          text: "billing@mikn.dev",
          title: t("billing-support"),
          href: "mailto:billing@mikn.dev",
        },
        {
          icon: AlertTriangle,
          text: "abuse@mikn.dev",
          title: t("abuse-reports"),
          href: "mailto:abuse@mikn.dev",
        },
      ],
    },
    {
      icon: Phone,
      title: t("phone"),
      description: t("phone-disclaimer"),
      contactItems: [
        {
          icon: Phone,
          text: "+81 090-9276-3628",
        },
      ],
    },
    {
      icon: Gamepad2,
      title: t("discord"),
      contactItems: [],
      actionButton: {
        href: "https://discord.gg/2892hjFQn8",
        label: t("join"),
      },
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="flex flex-col justify-center items-center pb-24 px-4 w-full max-w-7xl mx-auto gap-8 mt-10">
        <h1 className="text-4xl lg:text-6xl text-white font-bold text-center">
          {t("title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {contactCards.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
}
