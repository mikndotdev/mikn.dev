import Image from "next/image";

export const runtime = "edge";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Typewriter from "../components/fancy/typewriter";
import { NumberTicker } from "@/app/components/fancy/NumberTicker";
import { Marquee } from "@/app/components/fancy/marqee";
import { VRM } from "@/app/components/vrm";

import { TbBrandOpenSource, TbWallet, TbPigMoney } from "react-icons/tb";

import mikan from "@/app/assets/img/mikan.png";
import HeartMascot from "@/app/assets/img/MDHeart.png";
import NeodyLogo from "@/app/assets/img/NeodyLogo.png";
import RTLogo from "@/app/assets/img/rt.png";
import KuronekoLogo from "@/app/assets/img/kuroneko.png";
import TakasumiLogo from "@/app/assets/img/takasumi.png";

const icons = Array(100).fill(mikan.src);

export default function Home() {
	const t = useTranslations("home");
	return (
		<main className="scroll-smooth">
			<div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 lg:px-8 py-8 lg:py-0">
				<div className="flex flex-col w-full lg:w-auto">
					<Link href={"#self-funded"}>
						<div className="flex flex-row items-center space-x-3 mb-3">
							<TbWallet className="text-primary" size={30} />
							<h1
								className="text-md text-white tooltip tooltip-warning"
								data-tip="No VC money here :3"
							>
								Backed by my own pocket money
							</h1>
						</div>
					</Link>
					<div className="flex flex-col lg:flex-row lg:space-x-5">
						<h1 className="text-4xl lg:text-6xl text-white">
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
							className="text-primary text-4xl lg:text-6xl"
							waitTime={1500}
							deleteSpeed={40}
							cursorChar={"|"}
						/>
					</div>
					<h1 className="text-xl lg:text-2xl text-white font-bold mt-4">
						{t("makeLifeEasier")}
					</h1>
					<h1 className="text-lg lg:text-xl text-white mt-10">
						{t("mainBlurb1")}
					</h1>
					<h1 className="text-lg lg:text-xl text-white">
						{t("mainBlurb2")}
					</h1>
					<div className="flex flex-row space-x-5 mt-10">
						<Link href={"/solutions"}>
							<button className="btn btn-primary text-white">
								{t("takeLook")}
							</button>
						</Link>
						<Link href={"#info"}>
							<button className="btn btn-secondary text-white">
								{t("learnMore")}
							</button>
						</Link>
					</div>
				</div>
				<div className="">
					<Link
						href={"https://www.youtube.com/@mikndotdev"}
						target={"_blank"}
					>
						<VRM />
					</Link>
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
						<h3 className="text-md text-white mb-3">
							{t("partOfPage")}
						</h3>
					</div>
					<Link href={"https://github.com/mikndotdev/mikn.dev"}>
						<button className="btn btn-primary mt-5 text-white">
							{t("viewOnGH")}
						</button>
					</Link>

					<div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 mt-24">
						<TbPigMoney
							className="text-primary animate-pulse"
							size={110}
						/>
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
						<div className="card card-bordered w-full lg:w-96 min-h-20 bg-inherit border-primary border-4">
							<div className="card-body text-center text-gray-400">
								<div className="flex flex-row justify-center items-center">
									<h3 className="text-3xl text-white">~$</h3>
									<NumberTicker
										value={14}
										className="text-white text-3xl lg:text-4xl"
									/>
								</div>
								{t("monthlyCost")}
							</div>
						</div>
						<div className="card card-bordered w-full lg:w-96 min-h-20 bg-inherit border-primary border-4">
							<div className="card-body text-center text-gray-400">
								<div className="flex flex-row justify-center items-center">
									<h3 className="text-3xl text-white">0</h3>
								</div>
								{t("MAUBilled")}
							</div>
						</div>
					</div>
					<h3 className="text-xl text-white mt-3 mb-3 text-center">
						{t("despite")}
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 w-full px-4">
						<div className="card card-bordered w-full lg:w-96 min-h-20 bg-inherit border-primary border-4">
							<div className="card-body text-center text-gray-400">
								<div className="flex flex-row justify-center items-center">
									<NumberTicker
										value={12}
										className="text-white text-3xl lg:text-4xl"
									/>
									<h3 className="text-3xl text-white">
										{" "}
										+TB
									</h3>
								</div>
								{t("monthlyBandwidth")}
							</div>
						</div>
						<div className="card card-bordered w-full lg:w-96 min-h-20 bg-inherit border-primary border-4">
							<div className="card-body text-center text-gray-400">
								<div className="flex flex-row justify-center items-center">
									<NumberTicker
										value={5}
										className="text-white text-3xl lg:text-4xl"
									/>
									<h3 className="text-3xl text-white"> +</h3>
								</div>
								{t("mainServices")}
							</div>
						</div>
						<div className="card card-bordered w-full lg:w-96 min-h-20 bg-inherit border-primary border-4">
							<div className="card-body text-center text-gray-400">
								<div className="flex flex-row justify-center items-center">
									<NumberTicker
										value={96}
										className="text-white text-3xl lg:text-4xl"
									/>
									<h3 className="text-3xl text-white"> %</h3>
								</div>
								{t("monthlyUptime")}
							</div>
						</div>
					</div>
					<Link href={"/cost"}>
						<button className="btn btn-primary mt-5 text-white">
							{t("HowSoCheap")}
						</button>
					</Link>

					<div className="flex flex-row justify-center items-center space-x-5 mt-24">
						<Image
							src={mikan.src}
							alt={"Mikan"}
							width={100}
							height={100}
						/>
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
						<button className="btn btn-primary mt-10 text-white">
							{t("workWithMe")}
						</button>
					</Link>

					<div className="h-[30vh]"></div>

					<h1 className="text-3xl lg:text-4xl text-white font-bold mt-24 text-center">
						{t("NoWait")}
					</h1>
					<h3 className="text-lg lg:text-xl text-gray-400 mt-3 text-center w-full lg:w-3/4">
						{t("NoWaitBlurb")}
					</h3>
					<Link href={"/solutions"}>
						<button className={"btn btn-primary mt-5 text-white"}>
							{t("takeLook")}
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
