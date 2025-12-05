import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E24D14',
                    50: '#FFF7F5',
                    100: '#FFE9E1',
                    200: '#FFD1C3',
                    300: '#FFB8A5',
                    400: '#FF9E87',
                    500: '#E24D14',
                    600: '#C43E0F',
                    700: '#A6300A',
                    800: '#882306',
                    900: '#6A1603',
                },
                secondary: {
                    DEFAULT: '#131313',
                    50: '#F5F5F5',
                    100: '#E5E5E5',
                    200: '#CCCCCC',
                    300: '#B3B3B3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4D4D4D',
                    800: '#333333',
                    900: '#131313',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
