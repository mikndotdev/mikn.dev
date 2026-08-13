"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useConsentStore } from "@/stores/consent";
import { cdnUrl } from "@/lib/cdn-converter";

export function CookieConsentModal() {
  const t = useTranslations("cookieConsent");
  const hasConsent = useConsentStore((state) => state.hasConsent);
  const hydrate = useConsentStore((state) => state.hydrate);
  const accept = useConsentStore((state) => state.accept);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <Dialog open={hasConsent === false}>
      <DialogContent showCloseButton={false}>
        <DialogTitle className="text-center text-xl">{t("title")}</DialogTitle>
        <a
          href="https://www.youtube.com/watch?v=poQBDCi-7o0"
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-md"
        >
          <video
            src={cdnUrl("airi.mp4")}
            autoPlay
            muted
            playsInline
            className="h-auto w-full"
          />
        </a>
        <div className="flex flex-col gap-2">
          <Button onClick={accept} className="w-full">
            {t("accept")}
          </Button>
          <a
            href="https://docs.mikn.dev/legal/cookies/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="ghost" className="w-full">
              {t("policy")}
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
