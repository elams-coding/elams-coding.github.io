import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  titleTemplate: true,
  description: "Portfolio de MAHAMOUD El Amine, étudiant en BTS SIO.",
  head: [["link", { "rel": "icon", "href": "./assets/img/elams-logo.png" }]],
  lang: "fr-FR",
  cleanUrls: true,
  assetsDir: "assets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Compétences', link: '/pages/competences' }
    ],

    sidebar: [
      {
        text: 'Compétences',
        items: [
          { text: 'Compétences Humaines', link: '/pages/competences-humaines' },
          { text: 'Compétences Techniques', link: '/pages/competences-techniques' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elams-coding' },
      { icon: 'gmail', link: "mailto:noah.mahamoud49@gmail.com" }
    ],

    logo: "assets/img/elams-logo.png",

    footer: {
      message: "By elams-coding",
      copyright: "Copyright © 2026"
    }
  }
})
