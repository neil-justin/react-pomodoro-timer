import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-ts-sass-jest-rtl-vite-stater/",
  plugins: [react()],
});
