module.exports = {
  title: "Crushed",
  tagline: "A mediocre game engine",
  url: "https://crushed.manen.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "crushed", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/crushed",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Source Code",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/crushed",
            },
            {
              label: "Engine",
              href: "https://github.com/crushed/crushed",
            },
            {
              label: "Website",
              href: "https://github.com/crushed/website",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} manen. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-bootstrap",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/crushed/website/edit/main/",
        },
      },
    ],
  ],
};
