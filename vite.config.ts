import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => {
  const repoName = "your-insight-hub"; // <-- change to your repo name

  return {
    base: `/${repoName}/`,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), command === "serve" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
