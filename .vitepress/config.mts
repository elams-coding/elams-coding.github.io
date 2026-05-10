import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  titleTemplate: true,
  description: "Portfolio de MAHAMOUD El Amine, étudiant en BTS SIO.",
  head: [["link", { "rel": "icon", "href": "/assets/img/elams-logo.png" }]],
  lang: "fr-FR",
  cleanUrls: true,
  assetsDir: "assets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Compétences', link: '/pages/competences' },
      { text: 'Parcours', link: '/pages/parcours' },
      { text: 'Projets', link: '/pages/projets' }
    ],

    sidebar: [
      {
        text: 'Compétences',
        items: [
          { text: 'Compétences Humaines', link: '/pages/competences-humaines' },
          { text: 'Compétences Techniques', link: '/pages/competences-techniques' }
        ]
      },
      {
        text: 'Parcours',
        items: [
          { text: 'Formations', link: '/pages/formations' },
          { text: 'Expériences Professionnelles', link: '/pages/experiences-pro' }

        ]
      },
      {
        text: 'Projets',
        items: [
          { text: 'Projets Académiques', link: '/pages/projets-academiques' },
          { text: 'Projets Personnels', link: '/pages/projets-personnels' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elams-coding' },
      { icon: 'gmail', link: "mailto:noah.mahamoud49@gmail.com" }
    ],

    logo: "/assets/img/elams-logo.png",

    footer: {
      message: "By elams-coding",
      copyright: "Copyright © 2026"
    }
  }
})
