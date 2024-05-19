import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/design-system/", // Set the base URL for the project
  plugins: [react()],
});
