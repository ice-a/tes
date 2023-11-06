import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "blog",
    link: "/posts/",
  },
  {
    text: "主站",
    icon: "book",
    link: "https://lideshan.cn",
  },
]);
