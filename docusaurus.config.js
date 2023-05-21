// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Technotic",
    tagline:
        '"Design smarter, not harder with Technotics powerful design system."',
    favicon: "img/favicon.png",

    // Set the production url of your site here
    url: "https://technotic.bncc.net",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "BNCC", // Usually your GitHub org/user name.
    projectName: "technotic", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Technotic",
                logo: {
                    alt: "technotic",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "configuration/Configuration",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        href: "https://github.com/RnDBNCC/technotic",
                        label: "GitHub",
                        position: "right",
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
                                label: "Tutorial",
                                to: "/docs/Configuration",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/RnDBNCC/technotic",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Bina Nusantara Computer Club, All Right Reserved. 
        <br>
        Create with ❤ by Research and Development BNCC`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
