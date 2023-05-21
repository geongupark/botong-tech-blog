import { defineConfig } from 'vitepress'
import { getSidebar } from '@geongu.park/vitepress-plugin-autosidebar'
const path = require('path');

// https://vitepress.dev/reference/site-config
export default defineConfig(
  async () => {
    return {
      title: "Botong",
      base: "/botong-tech-blog/",
      description: "Tech blog : botong",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'TIL', link: '/til/' },
          { text: 'LAB', link: '/lab/' }
        ],
        sidebar: {
          '/til/': [
            {
              text: 'TIL',
              link: '/til/',
              items: await getSidebar(path.join(__dirname, '/../'), '/til/'),
              // items: [
              //   { text: 'markdown-examples', link: '/til/markdown-examples' },
              //   { text: 'api-examples', link: '/til/api-examples' }
              // ]
            }
          ],
        },
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    };
  }
  )
