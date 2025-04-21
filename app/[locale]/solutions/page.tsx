import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { ItemCard } from "@/app/components/ItemCard";

export default function Home() {
	const t = useTranslations("solutions");
	return (
		<div className="min-h-screen items-center justify-center p-4">
			<div
				className={
					"flex flex-col space-y-3 justify-center items-center"
				}
			>
				<h1 className={"text-4xl text-white"}>{t("title")}</h1>
				<h2 className={"text-xl text-white"}>{t("subtitle")}</h2>
			</div>
			<div
				className={
					"grid grid-rows-1 lg:grid-rows-2 gap-5 mt-10 w-full max-w-5xl justify-center"
				}
			>
				<ItemCard
					name={"sukushocloud"}
					description={t("solutions.sukushocloud.description")}
					href={"https://sukusho.cloud"}
				/>
				<ItemCard
					name={"sukushocloud"}
					description={t("solutions.sukushocloud.description")}
					href={"https://sukusho.cloud"}
				/>
			</div>
		</div>
	);
}
