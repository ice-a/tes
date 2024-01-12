import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "木子",
  description: "爱喝水的木子",

  theme,
  plugins:[
    // feedPlugin({
    //   hostname:"https://lideshan.cn",
    //   rss:true,
    // }),
    // copyCodePlugin({}), // 代码复制
      'umami': { trackerUrl: 'https://umami.lideshan.top', siteId: '6d386c85-09bd-4369-a3b1-4a2b24690b8c' }
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
