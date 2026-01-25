import { useTranslations } from "next-intl";
import DecryptedText from "@/components/DecryptedText";
import { OSSProductCard } from "@/components/OSSProductCard";
import KaraSnapIcon from "@/assets/img/karasnap.png";
import MikanBotIcon from "@/assets/img/mikanbot.png";
import { IdCard, Rss, MessageSquare, Image, Gamepad } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";

export default function SolutionsPage() {
  const t = useTranslations("solutions");

  const sections = [
    {
      key: "main",
      products: [
        {
          key: "karaSnap",
          icon: KaraSnapIcon.src,
          repoUrl: "https://github.com/mikndotdev/karasnap",
          websiteUrl: "https://karasnap.mikn.dev",
          tagKeys: ["fun", "ai"],
        },
        {
          key: "nextDiscordAuth",
          icon: IdCard,
          repoUrl: "https://github.com/mikndotdev/next-discord-auth",
          websiteUrl: "https://npm.im/@mikandev/next-discord-auth",
          tagKeys: ["dev", "lib"],
        },
        {
          key: "rssfetch",
          icon: Rss,
          repoUrl: "https://github.com/mikndotdev/rssfetch",
          websiteUrl: "https://rssfetch.vercel.app",
          tagKeys: ["dev", "api"],
        },
        {
          key: "mikanbot",
          icon: MikanBotIcon.src,
          repoUrl: "https://github.com/mikndotdev/mikanbot-project",
          websiteUrl: "/solutions/mikanbot",
          tagKeys: ["fun", "bot"],
        },
        {
          key: "customrp",
          icon: SiDiscord,
          repoUrl: "https://github.com/mikndotdev/customrp",
          websiteUrl: "https://customrp.mikn.dev",
          tagKeys: ["fun"],
        },
        {
          key: "enkabadges",
          icon: Gamepad,
          repoUrl: "https://github.com/mikndotdev/enkabadges",
          websiteUrl: "https://enkabadges.mikn.dev",
          tagKeys: ["fun"],
        },
      ],
    },
    {
      key: "legacy",
      products: [
        {
          key: "chat",
          icon: MessageSquare,
          repoUrl: "https://github.com/mikndotdev/chat",
          tagKeys: ["ai"],
        },
        {
          key: "sukushocloud",
          icon: Image,
          repoUrl: "https://github.com/mikndotdev/sukushocloud-web",
          tagKeys: ["api", "fun"],
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="flex flex-col justify-center items-center pb-24 px-4 w-full max-w-7xl mx-auto gap-12 md:gap-24">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col justify-center items-center w-full gap-4"
          >
            <div className="text-center font-bold mt-3">
              <DecryptedText
                text={t(`${section.key}.title`)}
                animateOn="view"
                revealDirection="center"
                speed={50}
                maxIterations={20}
                useOriginalCharsOnly
                sequential
                className="text-3xl md:text-4xl font-bold"
                parentClassName="text-3xl md:text-4xl font-bold"
              />
            </div>
            <h3 className="text-lg md:text-xl text-gray-400 text-center w-full md:w-11/12">
              {t(`${section.key}.description`)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-5 gap-4">
              {section.products.map((product, productIndex) => (
                <OSSProductCard
                  key={productIndex}
                  name={t(`${product.key}.title`)}
                  description={t(`${product.key}.description`)}
                  icon={product.icon}
                  repoUrl={product.repoUrl}
                  websiteUrl={product.websiteUrl}
                  tags={product.tagKeys.map((tagKey) => t(`tags.${tagKey}`))}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
