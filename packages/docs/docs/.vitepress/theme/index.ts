import Theme from 'vitepress/theme'
import { h } from 'vue'
import AnimateTitle from './components/AnimationTitle.vue'
import imagesArticle from './components/imagesArticle.vue'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
// import '@vitepress-demo-preview/component/dist/style.css'
import './styles/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('imagesArticle', imagesArticle)
    app.component('demo-preview', AntDesignContainer)
  },
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-info': () => h(AnimateTitle),
    })
  },
}
