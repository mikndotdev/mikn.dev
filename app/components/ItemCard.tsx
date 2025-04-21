import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ItemCardProps {
	name: string;
	description: string;
	href: string;
	image?: string | null;
}

export function ItemCard({
	name,
	description,
	href,
	image = null,
}: ItemCardProps) {
	const t = useTranslations("itemCard");
	return (
		<div className="card card-bordered w-full lg:w-1/2 min-h-1/3 bg-inherit border-primary border-4">
			<div className="card-body text-center text-gray-400">
				{image ? (
					<div
						className="tooltip tooltip-warning"
						data-tip={t("image")}
					>
						<Image
							src={image}
							alt={name}
							width={200}
							height={200}
							className={"rounded-full"}
						/>
					</div>
				) : null}
				<div className="flex flex-col justify-center items-center space-y-2">
					<h3 className="text-3xl text-white">{name}</h3>
					<p className="text-xl text-gray-400">{description}</p>
					<Link href={href}>
						<button className="btn btn-primary">
							{t("button")}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
