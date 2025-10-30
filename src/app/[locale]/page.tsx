import { Button } from "@/components/animate-ui/components/buttons/button";
import SpotlightCard from "@/components/SpotlightCard";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import NumberTicker from "@/components/fancy/text/basic-number-ticker";
import Marquee from "@/components/fancy/blocks/simple-marquee";
import { VRM } from "@/components/vrm";

import { TbBrandOpenSource, TbWallet, TbPigMoney } from "react-icons/tb";

import mikan from "@/assets/img/mikan.png";
import HeartMascot from "@/assets/img/MDHeart.png";
import NeodyLogo from "@/assets/img/NeodyLogo.png";
import RTLogo from "@/assets/img/rt.png";
import KuronekoLogo from "@/assets/img/kuroneko.png";
import TakasumiLogo from "@/assets/img/takasumi.png";

export default async function IndexPage(params: Promise<{ locale: string }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("home");
  return (
    <main className="scroll-smooth">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 lg:px-8 py-8 lg:py-0">
        <div className="flex flex-col w-full lg:w-auto">
          <Link href={"#self-funded"}>
            <div className="flex flex-row items-center space-x-3 mb-3">
              <TbWallet className="text-primary" size={30} />
              <h1
                className="text-md text-white cursor-help"
                title="No VC money here :3"
              >
                Backed by my own pocket money
              </h1>
            </div>
          </Link>
          <div className="flex flex-col lg:flex-row lg:space-x-5">
            <h1 className="text-4xl lg:text-6xl text-white">
              {t("creating-cool")}
            </h1>
          </div>
          <h1 className="text-xl lg:text-2xl text-white font-bold mt-4">
            {t("makeLifeEasier")}
          </h1>
          <h1 className="text-lg lg:text-xl text-white mt-10">
            {t("mainBlurb1")}
          </h1>
          <h1 className="text-lg lg:text-xl text-white">{t("mainBlurb2")}</h1>
          <div className="flex flex-row space-x-5 mt-10">
            <Link href={"/solutions"}>
              <Button variant="default" size="lg">
                {t("takeLook")}
              </Button>
            </Link>
            <Link href={"#info"}>
              <Button variant="secondary" size="lg">
                {t("learnMore")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <VRM />
        </div>
      </div>

      <div className="" id="info">
        <div className="flex flex-col justify-center items-center space-y-3 px-4">
          <h3 className="text-xl text-gray-400 font-bold mt-10">
            {t("infoTitle")}
          </h3>
          <h1 className="text-3xl lg:text-4xl text-white font-bold text-center">
            {t("infoBlurb")}
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center py-24 px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5">
            <Image
              src={HeartMascot.src}
              alt={"Mascot Heart"}
              width={200}
              height={200}
            />
            <TbBrandOpenSource
              className="text-primary animate-pulse"
              size={110}
            />
          </div>
          <h1 className="text-3xl lg:text-4xl text-white font-bold mt-3 text-center">
            {t("OSSonOSS")}
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
            {t("OSSonOSSBlurb")}
          </h3>
          <div className="mt-5 flex flex-col justify-center items-center w-full">
            <h3 className="text-md text-white mb-3">{t("partOfPage")}</h3>
          </div>
          <Link href={"https://github.com/mikndotdev/mikn.dev"}>
            <Button variant="default" size="lg" className="mt-5">
              {t("viewOnGH")}
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 mt-24">
            <TbPigMoney className="text-primary animate-pulse" size={110} />
            <Image
              src={HeartMascot.src}
              alt={"Mascot Heart"}
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl lg:text-4xl text-white font-bold mt-3 text-center">
            {t("SimpleNCheap")}
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
            {t("SimpleNCheapBlurb")}
          </h3>
          <div className="mt-5 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 w-full px-4">
            <SpotlightCard
              className="w-full lg:w-96 min-h-20 border-primary border-2"
              spotlightColor="rgba(255, 153, 0, 0.25)"
            >
              <div className="text-center text-gray-400">
                <div className="flex flex-row justify-center items-center">
                  <h3 className="text-3xl text-white">~$</h3>
                  <NumberTicker
                    from={0}
                    target={14}
                    className="text-white text-3xl lg:text-4xl"
                  />
                </div>
                {t("monthlyCost")}
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="w-full lg:w-96 min-h-20 border-primary border-2"
              spotlightColor="rgba(255, 153, 0, 0.25)"
            >
              <div className="text-center text-gray-400">
                <div className="flex flex-row justify-center items-center">
                  <h3 className="text-3xl text-white">0</h3>
                </div>
                {t("MAUBilled")}
              </div>
            </SpotlightCard>
          </div>
          <h3 className="text-xl text-white mt-3 mb-3 text-center">
            {t("despite")}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 w-full px-4">
            <SpotlightCard
              className="w-full lg:w-96 min-h-20 border-primary border-2"
              spotlightColor="rgba(255, 153, 0, 0.25)"
            >
              <div className="text-center text-gray-400">
                <div className="flex flex-row justify-center items-center">
                  <NumberTicker
                    from={0}
                    target={12}
                    className="text-white text-3xl lg:text-4xl"
                  />
                  <h3 className="text-3xl text-white"> +TB</h3>
                </div>
                {t("monthlyBandwidth")}
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="w-full lg:w-96 min-h-20 border-primary border-2"
              spotlightColor="rgba(255, 153, 0, 0.25)"
            >
              <div className="text-center text-gray-400">
                <div className="flex flex-row justify-center items-center">
                  <NumberTicker
                    from={0}
                    target={5}
                    className="text-white text-3xl lg:text-4xl"
                  />
                  <h3 className="text-3xl text-white"> +</h3>
                </div>
                {t("mainServices")}
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="w-full lg:w-96 min-h-20 border-primary border-2"
              spotlightColor="rgba(255, 153, 0, 0.25)"
            >
              <div className="text-center text-gray-400">
                <div className="flex flex-row justify-center items-center">
                  <NumberTicker
                    from={0}
                    target={96}
                    className="text-white text-3xl lg:text-4xl"
                  />
                  <h3 className="text-3xl text-white"> %</h3>
                </div>
                {t("monthlyUptime")}
              </div>
            </SpotlightCard>
          </div>
          <Link href={"/cost"}>
            <Button variant="default" size="lg" className="mt-5">
              {t("HowSoCheap")}
            </Button>
          </Link>

          <div className="flex flex-row justify-center items-center space-x-5 mt-24">
            <Image src={mikan.src} alt={"Mikan"} width={100} height={100} />
          </div>
          <h1
            className="text-3xl lg:text-4xl text-white font-bold mt-3 text-center"
            id="self-funded"
          >
            {t("SelfFunded")}
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
            {t("SelfFundedBlurb")}
          </h3>

          <div className="flex flex-row justify-center items-center space-x-5 mt-24">
            <Image
              src={HeartMascot.src}
              alt={"Mascot Heart"}
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl lg:text-4xl text-white font-bold mt-3 text-center">
            {t("WorkWithBest")}
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
            {t("WorkWithBestBlurb")}
          </h3>

          <Marquee className="[--duration:20s] mt-10 w-full">
            <Link href={"https://neody.land"}>
              <Image
                src={NeodyLogo.src}
                alt={"Neody"}
                width={150}
                height={50}
                className="ml-16 mr-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
              />
            </Link>
            <Link href={"https://rt.neody.land"}>
              <Image
                src={RTLogo.src}
                alt={"RT"}
                width={50}
                height={50}
                className="ml-16 mr-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
              />
            </Link>
            <Link href={"https://kuroneko6423.com"}>
              <Image
                src={KuronekoLogo.src}
                alt={"Kuroneko"}
                width={50}
                height={50}
                className="ml-16 mr-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
              />
            </Link>
            <Link href={"https://takasumibot.com"}>
              <Image
                src={TakasumiLogo.src}
                alt={"Takasumi"}
                width={50}
                height={50}
                className="ml-16 mr-16 transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 active:scale-90"
              />
            </Link>
          </Marquee>

          <Link href={"/contact"}>
            <Button variant="default" size="lg" className="mt-10">
              {t("workWithMe")}
            </Button>
          </Link>

          <div className="h-[30vh]"></div>

          <h1 className="text-3xl lg:text-4xl text-white font-bold mt-24 text-center">
            {t("NoWait")}
          </h1>
          <h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
            {t("NoWaitBlurb")}
          </h3>
          <Link href={"/solutions"}>
            <Button variant="default" size="lg" className="mt-5">
              {t("takeLook")}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
