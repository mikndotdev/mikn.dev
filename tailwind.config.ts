import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#2D1800",
                foreground: "#FFD700",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            prefix: "nextui", // prefix for themes variables
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "dark", // default theme from the themes object
            defaultExtendTheme: "dark", // default theme to extend on custom themes
            layout: {}, // common layout tokens (applied to all themes)
            themes: {
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        background: "#2D1800",
                        foreground: "#FFD700",
                        primary: "#FFD700",
                        secondary: "#FFD700",
                    },
                },
            },
        }),
    ],
};
export default config;
