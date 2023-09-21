import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // "/posts/",
  {
    text: "博文",
    icon: "blog",
    link: "/posts/",
  },
  // "/door/",
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "主站",
    icon: "book",
    link: "https://lideshan.cn",
  },
]);
