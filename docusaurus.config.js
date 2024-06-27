// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "土鳖暗黑 1.13C 微变",
  tagline:
    "土鳖暗黑, 微变经典怀旧, 各职业平衡, 基于暗黑 1.13C 纯净版做了大量优化, 修复原版中很多不合理的设定, 在保持暗黑 II 原汁原味玩法的同时简化玩家操作, 明确清晰的人物装备成长路线, 有趣的 MF, 还有更多的东西等待你们探索.",
  favicon: "img/ama-64x64.PNG",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitee.com/buuug7/tb-d2-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitee.com/buuug7/tb-d2-docs/tree/main",
        },
        theme: {
          customCss: [
            "node_modules/utilities-css/dist/utilities-css.css",
            "node_modules/react-responsive-carousel/lib/styles/carousel.min.css",
            "./src/css/custom.css",
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "土鳖暗黑",
        logo: {
          alt: "土鳖暗黑 LOGO",
          src: "img/ama-128x128.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tubieDocs",
            position: "left",
            label: "siteIntro",
          },
          { to: "/blog", label: "blog", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "diablo2knowledge",
            position: "left",
            label: "diablo2knowledge",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "siteIntro",
                to: "/docs/tubieDocs/intro",
              },
              {
                label: "特别感谢",
                to: "/docs/tubieDocs/thanks",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "d2mods.info",
                href: "https://d2mods.info/",
              },
              {
                label: "暗黑破坏神 163 WIKI",
                href: "https://wiki.d.163.com/diablo/index.htm",
              },
              {
                label: "BBS IMPK",
                href: "https://bbs.impk.cc/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/buuug7/tb-d2-docs",
              },
              {
                label: "Gitee",
                href: "https://gitee.com/buuug7/tb-d2-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TuBie Mod. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],
};

export default config;
