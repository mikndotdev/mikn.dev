"use client";
import {
    ReadonlyURLSearchParams,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

import { Card, Heading } from "@neodyland/ui";
import Spinner from "@/app/ui/spinner";

const matches = {
    discord: "https://discord.gg/cyFHD79aw3",
    support: "https://discord.gg/cyFHD79aw3",
    youtube: "https://www.youtube.com/@neodyland",
    twitter: "https://twitter.com/neodyland",
    github: "https://github.com/neodyland",
    "glow-bot": "https://glow-bot.com",
    artifacter: "https://artifacter.neody.land",
    "artifacter-web": "https://artifacter.neody.land",
    "role-bot":
        "https://discord.com/api/oauth2/authorize?client_id=1104602045299839036&permissions=268790848&scope=bot%20applications.commands",
    "vote-bot":
        "https://discord.com/api/oauth2/authorize?client_id=1096724291627786281&permissions=355392&scope=bot%20applications.commands",
    "2qis": "https://2q.is",
    "pin-bot":
        "https://discord.com/api/oauth2/authorize?client_id=1104723159543984149&permissions=27648&scope=applications.commands%20bot",
    miq: "https://miq.moe/",
};

function match(params: ReadonlyURLSearchParams): string | null {
    let link = null;
    for (const [key, value] of Object.entries(matches)) {
        if (params.has(key)) {
            link = value;
        }
    }
    return link;
}

export default function To() {
    const params = useSearchParams();
    const router = useRouter();
    const [link, setLink] = useState<string | null>(null);
    /* eslint react-hooks/exhaustive-deps: 0 */
    useEffect(() => {
        const link = match(params) ?? "/404";
        setLink(link);
        setTimeout(() => router.replace(link), 1000000);
    }, []);
    return (
        <Card className="flex justify-center items-center mt-40">
            <Heading as="h1" size="xl" className="">
                <span className="text-5xl lg:text-5xl pl-10">
                    Redirecting...
                </span>
                <Spinner size="lg" />
            </Heading>
        </Card>
    );
}
