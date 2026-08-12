import { create } from "zustand";

const CONSENT_COOKIE = "cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 60;

function readConsent() {
  if (typeof document === "undefined") return null;
  return document.cookie.split("; ").some((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
}

interface ConsentStore {
  hasConsent: boolean | null;
  hydrate: () => void;
  accept: () => void;
  retract: () => void;
}

export const useConsentStore = create<ConsentStore>((set) => ({
  hasConsent: null,
  hydrate: () => set({ hasConsent: readConsent() }),
  accept: () => {
    document.cookie = `${CONSENT_COOKIE}=accepted; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax`;
    set({ hasConsent: true });
  },
  retract: () => {
    document.cookie = `${CONSENT_COOKIE}=; max-age=0; path=/; SameSite=Lax`;
    set({ hasConsent: false });
  },
}));
