import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), wasm()],
    build: {
        assetsDir: "public",
        target: "esnext",
    },
    define: {
        global: {}
    }
});
