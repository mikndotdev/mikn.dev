const optimizerUrl = process.env.NEXT_PUBLIC_IMAGE_OPTIMIZER_URL || "";
const hostname = process.env.CF_PAGES_URL;

export default function ImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  if (process.env.NODE_ENV === "development") {
    return src;
  }
  const params = [`size=${width}`];
  params.push(`quality=${quality || 75}`);
  return `${optimizerUrl}/${encodeURIComponent(`${hostname}${src}`)}?${params.join("&")}`;
}
