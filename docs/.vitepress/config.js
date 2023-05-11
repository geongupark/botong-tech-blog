import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/autoSidebar.js'
const path = require('path');

// https://vitepress.dev/reference/site-config
export default defineConfig(
  async () => {
    return {
      title: "Botong",
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
        //  'LAB' : getSidebar(__dirname + '/../lab', '.md').then(result => { const fileObjects = result; }).catch(err => { console.log('Error:', err);}),
        },
        // sidebar: [
        //   getSidebar({ contentRoot: '/docs', contentDirs: ['TIL'], collapsible: true, collapsed: true }),
        //   getSidebar({ contentRoot: '/docs', contentDirs: ['lab'], collapsible: true, collapsed: true }),
        // ],
        // sidebar: {
        //   '/til/': getSidebar({ contentRoot: '/docs', contentDirs: ['TIL'], collapsible: true, collapsed: true }),
        //   '/lab/': getSidebar({ contentRoot: '/docs', contentDirs: ['lab'], collapsible: true, collapsed: true }),
        // },
        // sidebar: {
        //   '/til/': [
        //     {
        //       text: 'TIL',
        //       link: '/til/',
        //       items: [
        //         { text: 'Markdown Examples', link: '/til/markdown-examples' },
        //         { text: 'Runtime API Examples', link: '/til/api-examples' }
        //       ]
        //     }
        //   ],
        // },
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    };
  }
  )
