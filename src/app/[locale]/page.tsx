import { Button } from "@/components/ui/button";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function IndexPage(params: Promise<{ locale: string }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("home");
  return (
    <>
      <Button>a</Button>
    </>
  );
}
