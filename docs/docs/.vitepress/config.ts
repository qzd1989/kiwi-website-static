import { defineConfig } from "vitepress";

const isDev = process.env.NODE_ENV === "development";
const homeHref = isDev ? "http://localhost:9992" : "https://kiwi.biexi.com";

export default defineConfig({
  title: "Kiwi Documentation",
  description: "Documentation of Kiwi",
  base: "/docs/",
  srcDir: "src",
  themeConfig: {
    nav: [{ text: "Home", link: homeHref, target: "_self" }],
    sidebar: [
      {
        text: "Kiwi",
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "Python",
        items: [
          { text: "Kiwi Project", link: "/modules/python/project" },
          {
            text: "Module.ScreenClient",
            link: "/modules/python/screen_client",
          },
          { text: "Module.System", link: "/modules/python/system" },
          { text: "Module.Key", link: "/modules/python/key" },
          { text: "Module.Point", link: "/modules/python/point" },
          {
            text: "Module.ColoredPoint",
            link: "/modules/python/colored_point",
          },
          { text: "Module.Response", link: "/modules/python/response" },
          { text: "Module.RgbOffset", link: "/modules/python/rgb_offset" },
          {
            text: "Module.WeightPoint",
            link: "/modules/python/weight_point",
          },
        ],
      },
    ],
  },
});
