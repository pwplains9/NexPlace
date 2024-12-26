// vite.config.js
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///C:/Users/pwpla/PhpstormProjects/NexPlace/node_modules/vite/dist/node/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/pwpla/PhpstormProjects/NexPlace/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import vue from "file:///C:/Users/pwpla/PhpstormProjects/NexPlace/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/pwpla/PhpstormProjects/NexPlace/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/pwpla/PhpstormProjects/NexPlace/vite.config.js";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
      /**
       * custom insert position
       * @default: body-last
       */
      inject: "body-last" | "body-first",
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: "__svg__icons__dom__"
    })
    // vitePluginFaviconsInject('./src/assets/logo.svg'),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/mixins/_breakpoint.scss";
                    @import "@/styles/_functions.scss";
                `
      }
    }
  },
  server: {
    port: 3e3,
    host: "0.0.0.0"
  },
  base: process.env.NODE_ENV === "production" ? `/` : "/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwd3BsYVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXE5leFBsYWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwd3BsYVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXE5leFBsYWNlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wd3BsYS9QaHBzdG9ybVByb2plY3RzL05leFBsYWNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ3VybCdcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHtjcmVhdGVTdmdJY29uc1BsdWdpbn0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uanNgLFxuICAgICAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5qc2AsXG4gICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLltleHRdYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbdnVlKCksIHZ1ZUpzeCgpLFxuICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgICAgICAvLyBTcGVjaWZ5IHRoZSBpY29uIGZvbGRlciB0byBiZSBjYWNoZWRcbiAgICAgICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAgICAgLy8gU3BlY2lmeSBzeW1ib2xJZCBmb3JtYXRcbiAgICAgICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGN1c3RvbSBpbnNlcnQgcG9zaXRpb25cbiAgICAgICAgICAgICAqIEBkZWZhdWx0OiBib2R5LWxhc3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5qZWN0OiAnYm9keS1sYXN0JyB8ICdib2R5LWZpcnN0JyxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBjdXN0b20gZG9tIGlkXG4gICAgICAgICAgICAgKiBAZGVmYXVsdDogX19zdmdfX2ljb25zX19kb21fX1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjdXN0b21Eb21JZDogJ19fc3ZnX19pY29uc19fZG9tX18nLFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdml0ZVBsdWdpbkZhdmljb25zSW5qZWN0KCcuL3NyYy9hc3NldHMvbG9nby5zdmcnKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBcbiAgICAgICAgICAgICAgICAgICAgQGltcG9ydCBcIkAvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiO1xuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IFwiQC9zdHlsZXMvbWl4aW5zL19icmVha3BvaW50LnNjc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgQGltcG9ydCBcIkAvc3R5bGVzL19mdW5jdGlvbnMuc2Nzc1wiO1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcG9ydDogMzAwMCxcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIH0sXG4gICAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGAvYCA6ICcvJyxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ULFNBQVEsZUFBZSxXQUFVO0FBQ3JWLFNBQVEsb0JBQW1CO0FBQzNCLFNBQVEsNEJBQTJCO0FBQ25DLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBTDhLLElBQU0sMkNBQTJDO0FBUWxQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNKLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUFDLElBQUk7QUFBQSxJQUFHLE9BQU87QUFBQSxJQUNwQixxQkFBcUI7QUFBQTtBQUFBLE1BRWpCLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQTtBQUFBLE1BRTFELFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVYsUUFBUSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU10QixhQUFhO0FBQUEsSUFDakIsQ0FBQztBQUFBO0FBQUEsRUFFTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN4RDtBQUFBLEVBQ0o7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxRQUNGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLcEI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxNQUFNO0FBQ3hELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
