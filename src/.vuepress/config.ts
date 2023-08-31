import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins:[
    // feedPlugin({
    //   hostname:"https://lideshan.cn",
    //   rss:true,
    // }),
    // copyCodePlugin({}), // 代码复制

  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
