// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Antro del Furegone',
  tagline: 'Un luogo dove raccolgo i Miei Progetti',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Set the production url of your site here
  url: 'https://furegone.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/antro/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Furegone', // Usually your GitHub org/user name.
  projectName: 'antro', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [require("remark-breaks")],
              },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;400;600;900&Fira+Sans:wght@100&PT+Sans+Narrow:wght@400;700&Public+Sans:wght@100;200&display=swap",
            },
        },
    ],

plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      // Opzioni raccomandate per un sito in italiano
      indexDocs: true,
      indexPages: true,
      language: ['it'], // Puoi usare anche ['en', 'it'] se bilingue
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
      searchBarShortcut: false,
    },
  ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://furegone.github.io/antro/img/docusaurus-social-card2.jpg?v=2',
      navbar: {
        title: 'Antro del Furegone',
        logo: {
          alt: 'Logo',
          src: 'img/home.png',
        },
        items: [
          {to: '/docs/SRD/DAGGERHEART', label: 'SRD', position: 'left'},
          {to: '/grid', label: 'Links', position: 'left'},
          {to: '/modulo', label: 'Modulo Foundry', position: 'left'}, // ← qui
          { type: 'search', position: 'right'}, // ← Casella di ricerca
        ],
      },
        colorMode: {
    disableSwitch: true,
    defaultMode: 'dark',
    respectPrefersColorScheme: false,
  },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Progetti',
            items: [
              {
                label: 'Daggerheart SRD',
                to: '/docs/SRD/DAGGERHEART',
              },
                            {
                label: 'Modulo Foundry',
                to: '/modulo',
              },
            ],
          },
          {
            title: 'Collegamenti Rapidi',
            items: [
              {
                label: 'Links',
                to: '/grid',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Furegone/antro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Antro del Furegone`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
          tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    }),
};

export default config;
