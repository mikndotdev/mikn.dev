import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const experimental_ppr = true

export default async function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<AiOutlineLoading3Quarters className="w-12 h-12 animate-spin text-white" />
		</div>
	);
}
