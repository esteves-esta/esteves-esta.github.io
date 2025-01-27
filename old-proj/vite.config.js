import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    base: mode === "production" ? "/" : "",
    plugins: [react()],
  };
  return config;
});
