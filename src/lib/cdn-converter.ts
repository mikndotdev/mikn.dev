const PROD_CDN_BASE = "https://cdn.mikn.dev/web/static";
const DEV_CDN_BASE = "/cdn";

export function cdnUrl(path: string): string {
  const normalized = path.replace(/^\/+/, "");
  const base = process.env.NODE_ENV === "production" ? PROD_CDN_BASE : DEV_CDN_BASE;
  return `${base}/${normalized}`;
}
