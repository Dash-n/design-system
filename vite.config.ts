import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/** @type {import('@ladle/react').UserConfig} */

// https://vitejs.dev/config/
export default defineConfig({
  base: "/design-system/", // Set the base URL for the project
  plugins: [react()],
});
