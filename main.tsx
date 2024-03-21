/** @jsx h */
import blog, { ga, redirects } from "blog";

blog({
  title: "Ninja Coder!",
  description: "This is Ninja's new blog!",
  avatar:
    "https://lh3.googleusercontent.com/a/AGNmyxZkp09uhx6t8_Jgyhipf5c6duzz_m5zUkWs8RiHgg=s288",
  avatarClass: "rounded-full",
  author: "Xamidullo Xudoyberdiyev",
  links: [
    { title: "Email", url: "mailto:khkhamidullo@gmail.com" },
    { title: "GitHub", url: "https://github.com/xam1dullo" },
    { title: "Gitlab", url: "https://gitlab.com/xam1dullo" },
  ],
  lang: "uz",
  theme: "light",
  middlewares: [
    ga("G-52NDYBCFE2"),
    redirects({
      "/hello_world.html": "/hello_world",
    }),
  ],
});
