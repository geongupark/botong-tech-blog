// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './tailwind.postcss'
import IntroTIL from '../components/IntroTIL.vue'
import VueKinesis from "vue-kinesis";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(VueKinesis).component('IntroTIL', IntroTIL)
    // ...
  }
}
