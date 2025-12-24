import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  Headset,
  CreditCard,
  AlertTriangle,
  Gamepad2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/animate-ui/components/buttons/button";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main>
      <div className="flex flex-col space-y-5 justify-center items-center mt-10">
        <h1 className="text-4xl lg:text-6xl text-white font-bold">
          {t("title")}
        </h1>

        <Card className="w-full min-h-20 bg-inherit border-primary border-4 mt-5">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center text-gray-400 space-y-4">
            <div className="flex flex-row justify-center items-center space-x-5">
              <Mail className="w-12 h-12 text-primary" />
              <h3 className="text-3xl text-white">{t("mail")}</h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-3 lg:space-y-0">
              <div
                className="flex flex-row justify-center items-center space-x-3 cursor-help"
                title={t("general-support")}
              >
                <Headset className="w-6 h-6 text-primary" />
                <h3 className="text-xl">hello@mikn.dev</h3>
              </div>
              <div
                className="flex flex-row justify-center items-center space-x-3 cursor-help"
                title={t("billing-support")}
              >
                <CreditCard className="w-6 h-6 text-primary" />
                <h3 className="text-xl">billing@mikn.dev</h3>
              </div>
              <div
                className="flex flex-row justify-center items-center space-x-3 cursor-help"
                title={t("abuse-reports")}
              >
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h3 className="text-xl">abuse@mikn.dev</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full min-h-20 bg-inherit border-primary border-4">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center text-gray-400 space-y-4">
            <div className="flex flex-row justify-center items-center space-x-5">
              <Phone className="w-12 h-12 text-primary" />
              <h3 className="text-3xl text-white">{t("phone")}</h3>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5">
              <h3 className="text-xl">+81 090-9276-3628</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full min-h-20 bg-inherit border-primary border-4">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center text-gray-400 space-y-4">
            <div className="flex flex-row justify-center items-center space-x-5">
              <Gamepad2 className="w-12 h-12 text-primary" />
              <h3 className="text-3xl text-white">{t("discord")}</h3>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5">
              <Link href="https://discord.gg/2892hjFQn8">
                <Button variant="default" size="lg">
                  {t("join")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <h1 className="text-gray-400 text-center">{t("phone-disclaimer")}</h1>
      </div>
    </main>
  );
}
