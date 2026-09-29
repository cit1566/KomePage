import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  // 👇 이 부분을 추가하세요
  server: {
    watch: {
      usePolling: true,
    },
  },
});
