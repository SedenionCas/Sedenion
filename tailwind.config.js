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
                "surface-1": "#1a1a1a",
                "surface-2": "#141414",
                "primary-light": "#3b82f6",
                "primary": "#2563eb",
                "primary-dark": "#1d4ed8",
                "text-1": "#E8E8E8",
                "text-2": "#D4D4D4",
                "border": "#4D4D4D",
                "success": "#16a34a",
                "warning": "#ca8a04",
                "error": "#dc2626",
                "info": "#0891b2",
            },
            borderRadius: {
                "primary": "0.375rem",
            },
            padding: {
                "xs": "0.5rem",
                "sm": "1rem",
            }
        },
    },

    plugins: [],
};
