/** @jsx h */
import blog, { ga, redirects } from "blog";

blog({
  title: "Ninja Coder!",
  description: "This is Ninja's new blog!",
  avatar: "https://dash.deno.com/assets/logo.svg",
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
