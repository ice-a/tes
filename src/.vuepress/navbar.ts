import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  "/posts/",
  {
    text: "文章",
    icon: "blog",
    link: "/posts/",
  },
  "/door/",
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);