import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@neodyland/ui/**/*.{js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ff9900",
                },
            },
        ],
    },
    theme: {
        extend: {
            colors: {
                primary: "#ff9900",
                "on-primary": "#ffffff",
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
