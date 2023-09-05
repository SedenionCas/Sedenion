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
                "surface-1": "var(--surface-1)",
                "surface-2": "var(--surface-2)",
                "surface-3": "var(--surface-3)",
                "primary-light": "var(--primary-light)",
                "primary": "var(--primary)",
                "primary-dark": "var(--primary-dark)",
                "text-1": "var(--text-1)",
                "text-2": "var(--text-2)",
                "border": "var(--border)",
                "success": "var(--success)",
                "warning": "var(--warning)",
                "error": "var(--error)",
                "info": "var(--info)",
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
