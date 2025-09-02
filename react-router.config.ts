import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // GitHub Pages does not support SSR
  basename: '/', // Set the base path for the application
} satisfies Config;
