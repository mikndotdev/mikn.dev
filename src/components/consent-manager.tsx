import type { ReactNode } from "react";
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from "@c15t/nextjs/client";

export function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary"],
        react: {
          theme: {
            "banner.root": {
              style: {
                bottom: "0",
                right: "0",
                left: "auto",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              },
            },
            "banner.card": {
              style: {
                "--banner-background-color": "#663d00",
                "--banner-background-color-dark": "#663d00",
                "--banner-border-color": "#ff9900",
                "--banner-border-color-dark": "#ff9900",
                "--banner-shadow":
                  "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)",
                "--banner-shadow-dark":
                  "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)",
              },
            },
            "banner.header.root": {
              style: {
                "--banner-text-color": "#ffffff",
                "--banner-text-color-dark": "#ffffff",
              },
            },
            "banner.header.title": {
              style: {
                "--banner-title-color": "#ffffff",
                "--banner-title-color-dark": "#ffffff",
              },
            },
            "banner.header.description": {
              style: {
                "--banner-description-color": "#fafafa",
                "--banner-description-color-dark": "#fafafa",
              },
            },
            "banner.footer": {
              style: {
                "--banner-footer-background-color": "#663d00",
                "--banner-footer-background-color-dark": "#663d00",
              },
            },
            "banner.footer.accept-button": {
              style: {
                order: "1",
                backgroundColor: "#ff9900",
                color: "#ffffff",
                border: "none",
                outline: "none",
                boxShadow: "none",
                "--button-background-color": "#ff9900",
                "--button-background-color-dark": "#ff9900",
                "--button-background-color-hover": "#e68a00",
                "--button-background-color-hover-dark": "#e68a00",
                "--button-text": "#ffffff",
                "--button-text-dark": "#ffffff",
                "--button-border-width": "0",
                "--button-border-style": "none",
                "--button-border-color": "transparent",
                "--button-primary": "#ff9900",
                "--button-primary-hover": "#e68a00",
              },
            },
            "banner.footer.reject-button": {
              style: {
                order: "2",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid #ffffff",
                outline: "none",
                "--button-background-color": "transparent",
                "--button-background-color-dark": "transparent",
                "--button-background-color-hover": "rgba(255, 119, 0, 0.1)",
                "--button-background-color-hover-dark":
                  "rgba(255, 119, 0, 0.1)",
                "--button-text": "#ffffff",
                "--button-text-dark": "#ffffff",
                "--button-border": "1px solid #ffffff",
                "--button-border-dark": "1px solid #ffffff",
                "--button-border-width": "1px",
                "--button-border-style": "solid",
                "--button-border-color": "#ffffff",
              },
            },
            "banner.footer.customize-button": {
              style: {
                order: "3",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid #ffffff",
                outline: "none",
                "--button-background-color": "transparent",
                "--button-background-color-dark": "transparent",
                "--button-background-color-hover": "rgba(255, 119, 0, 0.1)",
                "--button-background-color-hover-dark":
                  "rgba(255, 119, 0, 0.1)",
                "--button-text": "#ffffff",
                "--button-text-dark": "#ffffff",
                "--button-border": "1px solid #ffffff",
                "--button-border-dark": "1px solid #ffffff",
                "--button-border-width": "1px",
                "--button-border-style": "solid",
                "--button-border-color": "#ffffff",
              },
            },
            "dialog.overlay": {
              style: {
                "--dialog-overlay-background": "rgba(0, 0, 0, 0.5)",
                "--dialog-overlay-background-dark": "rgba(0, 0, 0, 0.5)",
              },
            },
            "dialog.root": {
              style: {
                "--dialog-background": "#663d00",
                "--dialog-background-color-dark": "#663d00",
                "--dialog-border-color": "#ff9900",
                "--dialog-border-color-dark": "#ff9900",
              },
            },
            "dialog.title": {
              style: {
                "--dialog-title-color": "#ffffff",
                "--dialog-title-color-dark": "#ffffff",
              },
            },
            "dialog.description": {
              style: {
                "--dialog-description-color": "#fafafa",
                "--dialog-description-color-dark": "#fafafa",
              },
            },
          },
        },
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      {children}
    </ConsentManagerProvider>
  );
}
