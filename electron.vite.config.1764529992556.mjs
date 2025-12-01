// electron.vite.config.ts
import path, { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
var __electron_vite_injected_dirname = "Z:\\NoteCraft";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        "@/lib": resolve("src/shared/lib"),
        "@/shared": resolve("src/shared"),
        "@": path.resolve(__electron_vite_injected_dirname, "src/main"),
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: "src/renderer/assets/**",
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@shared": resolve("src/shared"),
        "@/hooks": resolve("src/renderer/src/hooks"),
        "@/assets": resolve("src/renderer/src/assets"),
        "@/store": resolve("src/renderer/src/store"),
        "@/components": resolve("src/renderer/src/components"),
        "@/mocks": resolve("src/renderer/src/mocks"),
        "@": path.resolve(__electron_vite_injected_dirname, "src/renderer/src"),
        '@shared': path.resolve(__electron_vite_injected_dirname, 'src/shared')
      }
    },
    plugins: [react()]
  }
});
export {
  electron_vite_config_default as default
};
