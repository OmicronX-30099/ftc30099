import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ftc30099/', 
  title: "FTC 30099 - OmicronX",
  description: "Official Team Website",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Our Robot', link: '/robot' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OmicronX-30099/ftc30099' }
    ]
  }
})