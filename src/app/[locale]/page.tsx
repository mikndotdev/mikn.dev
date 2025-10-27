import { Button } from "@/components/ui/button";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function IndexPage(params: Promise<{ locale: string }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("HomePage");
  return (
    <>
      <Button>a</Button>
    </>
  );
}
