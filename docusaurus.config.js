// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "土鳖暗黑 1.13C 优化版",
  tagline:
    "土鳖暗黑, 微变经典怀旧, 各职业平衡, 基于暗黑 1.13C 纯净版做了大量优化, 修复原版中很多不合理的设定, 在保持暗黑 II 原汁原味玩法的同时简化玩家操作, 明确清晰的人物装备成长路线, 有乐趣的 MF, 还有更多有趣的东西期等待你们的探索.",
  favicon: "img/icon-48x48.png",

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
          editUrl: "https://gitee.com/buuug7/tb-d2-site/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitee.com/buuug7/tb-d2-site/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
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
          src: "img/icon-144x144.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "siteSummary",
          },
          { to: "/blog", label: "blog", position: "left" },
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
                to: "/docs/intro",
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
                href: "https://github.com/buuug7/tb-d2-site",
              },
              {
                label: "Gitee",
                href: "https://gitee.com/buuug7/tb-d2-site",
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
};

export default config;
