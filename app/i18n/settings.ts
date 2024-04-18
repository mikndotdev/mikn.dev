export const fallbackLng = "en-GB";
export const languages = [fallbackLng, "ja-JP"];
export const defaultNS = "common";
export const cookieName = "language";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
