import { defineUserConfig } from "vuepress";
import { umamiAnalyticsPlugin } from 'vuepress-plugin-umami-analytics';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "木子",
  description: "爱喝水的木子",

  theme,
  plugins:[
    umamiAnalyticsPlugin({"id":"6d386c85-09bd-4369-a3b1-4a2b24690b8c","src":"https://umami.lideshan.top/script.js"}),
    // feedPlugin({
    //   hostname:"https://lideshan.cn",
    //   rss:true,
    // }),
    // copyCodePlugin({}), // 代码复制
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
