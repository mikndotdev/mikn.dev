import Link from "next/link";

import { useTranslations } from "next-intl";

import { IoMdMail } from "react-icons/io";
import {
	MdPhone,
	MdSupportAgent,
	MdMonetizationOn,
	MdWarning,
} from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
	const t = useTranslations("contact");
	return (
		<main>
			<div
				className={`flex flex-col space-y-5 justify-center items-center mt-10`}
			>
				<h1 className="text-4xl lg:text-6xl text-white">
					{t("title")}
				</h1>
				<div className="card card-bordered w-full min-h-20 bg-inherit border-primary border-4 mt-5">
					<div className="card-body text-center text-gray-400">
						<div className="flex flex-row justify-center items-center space-x-5">
							<IoMdMail className="w-12 h-12 text-primary" />
							<h3 className="text-3xl text-white">{t("mail")}</h3>
						</div>
						<div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-3 space-y-3 lg:space-y-0">
							<div
								className={
									"flex flex-row justify-center items-center space-x-3 tooltip tooltip-warning"
								}
								data-tip={t("general-support")}
							>
								<MdSupportAgent className="w-8 h-8 text-primary" />
								<h3 className="text-xl">hello@mikn.dev</h3>
							</div>
							<div
								className={
									"flex flex-row justify-center items-center space-x-3 tooltip tooltip-warning"
								}
								data-tip={t("billing-support")}
							>
								<MdMonetizationOn className="w-8 h-8 text-primary" />
								<h3 className="text-xl">billing@mikn.dev</h3>
							</div>
							<div
								className={
									"flex flex-row justify-center items-center space-x-3 tooltip tooltip-warning"
								}
								data-tip={t("abuse-reports")}
							>
								<MdWarning className="w-8 h-8 text-primary" />
								<h3 className="text-xl">abuse@mikn.dev</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="card card-bordered w-full min-h-20 bg-inherit border-primary border-4">
					<div className="card-body text-center text-gray-400">
						<div className="flex flex-row justify-center items-center space-x-5">
							<MdPhone className="w-12 h-12 text-primary" />
							<h3 className="text-3xl text-white">
								{t("phone")}
							</h3>
						</div>
						<div className="flex flex-row justify-center items-center space-x-5">
							<h3 className="text-xl">+81 050-5532-0721</h3>
						</div>
					</div>
				</div>
				<div className="card card-bordered w-full min-h-20 bg-inherit border-primary border-4">
					<div className="card-body text-center text-gray-400">
						<div className="flex flex-row justify-center items-center space-x-5">
							<FaDiscord className="w-12 h-12 text-primary" />
							<h3 className="text-3xl text-white">
								{t("discord")}
							</h3>
						</div>
						<div className="flex flex-row justify-center items-center space-x-5">
							<Link href={"https://discord.gg/2892hjFQn8"}>
								<button className={"btn btn-primary"}>
									{t("join")}
								</button>
							</Link>
						</div>
					</div>
				</div>
				<h1 className={"text-gray-400"}>{t("phone-disclaimer")}</h1>
			</div>
		</main>
	);
}
