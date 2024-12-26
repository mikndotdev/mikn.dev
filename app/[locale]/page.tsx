export const runtime = "edge";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Typewriter from "../components/fancy/typewriter";
import mikan from "@/app/assets/img/mikan.png";
import { IconCloud } from "@/app/components/fancy/icon-cloud";

const icons = Array(120).fill(mikan.src);

export default function Home() {
    const t = useTranslations("home");
    return (
        <main className={"py-10"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"flex flex-col"}>
                    <div className={"flex flex-row space-x-5"}>
                        <h1 className={"text-6xl text-white font-bold"}>
                            {t("creating-cool")}
                        </h1>
                        <Typewriter
                            text={[
                                t("stuff"),
                                t("apps"),
                                t("tools"),
                                t("bots"),
                            ]}
                            speed={70}
                            className="text-primary text-6xl"
                            waitTime={1500}
                            deleteSpeed={40}
                            cursorChar={"|"}
                        />
                    </div>
                    <h1 className={"text-2xl text-white font-bold mt-4"}>
                        {t("makeLifeEasier")}
                    </h1>
                    <h1 className={"text-xl text-white mt-10"}>
                        {t("mainBlurb1")}
                    </h1>
                    <h1 className={"text-xl text-white"}>
                        {t("mainBlurb2")}
                    </h1>
                    <div className={"flex flex-row space-x-5 mt-10"}>
                        <Link href={"/solutions"}>
                            <button className={"btn btn-primary text-white"}>{t("takeLook")}</button>
                        </Link>
                        <Link href={"#more"}>
                            <button className={"btn btn-secondary text-white"}>{t("learnMore")}</button>
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        "w-1/3 flex flex-col justify-center items-center"
                    }
                >
                    <IconCloud imageArray={icons}/>
                </div>
            </div>
        </main>
    );
}
