import React from 'react';
import Image from "next/image";
import mikanMascot from "../app/assets/MikanMascotFull.png";

const ThemeConfig = () => {
    return (
        <>
            <Image
                src={mikanMascot.src}
                width={50}
                height={50}
                alt="MikanDev Logo"
                className="ml-2 mb-0"
            />
            <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
                MikanDev Docs
            </span>
            <footer>
                <span>
                    © 2020-{new Date().getFullYear()}{" "}
                    <a href="/" target="_blank">
                        MikanDev
                    </a>
                </span>
            </footer>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="MikanDev Docs" />
                <meta
                    property="og:description"
                    content="Documentation for MikanDev services"
                />
            </head>
        </>
    );
};

export default ThemeConfig;