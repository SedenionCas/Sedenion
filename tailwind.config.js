/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                truegray: {
                    50: "#E8E8E8",
                    100: "#D4D4D4",
                    200: "#A6A6A6",
                    300: "#7A7A7A",
                    400: "#4D4D4D",
                    500: "#212121",
                    600: "#1A1A1A",
                    700: "#141414",
                    800: "#0D0D0D",
                    900: "#080808",
                    950: "#030303",
                },
            },
        },
    },

    plugins: [],
};
