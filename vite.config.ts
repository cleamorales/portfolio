import { defineConfig, type HtmlTagDescriptor, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Site settings (replaces .figma/make/site.json) — edit these freely.
const site = {
  title: "Clea | Portfolio",
  description: "",
  language: "en",
  favicon: "/favicon.png",
  socialImage: "", // e.g. "/about-portrait.jpg" for link previews
};

// Vite config — https://vitejs.dev/config/
export default defineConfig({
  base: "/", // custom domain → serve from root
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

/** Fills the <!-- figma:... --> placeholders in index.html and adds meta tags. */
function siteMeta(): Plugin {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return {
    name: "site-meta",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const result = html
          .replace("<!-- figma:lang -->", site.language)
          .replace("<!-- figma:title -->", escape(site.title))
          // clear any leftover figma slots (custom script hooks)
          .replace(/<!-- figma:[a-z-]+ -->/g, "");

        const tags: HtmlTagDescriptor[] = [
          { tag: "link", attrs: { rel: "icon", href: site.favicon }, injectTo: "head" },
          { tag: "meta", attrs: { property: "og:title", content: site.title }, injectTo: "head" },
        ];
        if (site.description) {
          tags.push(
            { tag: "meta", attrs: { name: "description", content: site.description }, injectTo: "head" },
            { tag: "meta", attrs: { property: "og:description", content: site.description }, injectTo: "head" },
          );
        }
        if (site.socialImage) {
          tags.push(
            { tag: "meta", attrs: { property: "og:image", content: site.socialImage }, injectTo: "head" },
            { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" }, injectTo: "head" },
          );
        }
        return { html: result, tags };
      },
    },
  };
}