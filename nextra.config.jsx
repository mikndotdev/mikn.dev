import Image from "next/image";
import mikanMascot from "@/app/assets/MikanMascotFull.png";

export default {
    toc: {
        float: false,
    },
    feedback: {
        content: null,
    },
    editLink: {
        component: null,
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s – MikanDev Docs",
        };
    },
    logo: (
        <>
            <Image
                src={mikanMascot.src}
                width={70}
                height={70}
                alt="MikanDev Mascot"
                className="ml-2 mb-0"
            />
            <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
                MikanDev Docs
            </span>
        </>
    ),
    footer: {
        text: (
            <span>
                © 2020-{new Date().getFullYear()}{" "}
                <a href="/" target="_blank">
                    MikanDev
                </a>
            </span>
        ),
    },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="MikanDev Docs" />
            <meta
                property="og:description"
                content="Documentation for MikanDev services and projects."
            />
        </>
    ),
    sidebar: {
        titleComponent({ title, type }) {
            if (type === "separator") {
                return (
                    <div style={{ background: "cyan", textAlign: "center" }}>
                        {title}
                    </div>
                );
            }
            if (title === "About") {
                return <>❓ {title}</>;
            }
            return <>{title}</>;
        },
    },
};
