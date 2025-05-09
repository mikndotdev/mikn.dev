import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|img|favicon.ico|sw.js|sitemap.xml|vroid*|98gas9mkeb.txt|robots.txt|opengraph-image.png).*)",
	],
};
