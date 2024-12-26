import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
    // matcher: '/:lng*'
    matcher: [
        "/((?!api|_next/static|_next/image|img|favicon.ico|sw.js|sitemap.xml|98gas9mkeb.txt|robots.txt|og-homepage.png).*)",
    ],
};
