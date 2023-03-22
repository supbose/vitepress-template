import Theme from 'vitepress/theme'
import { h } from 'vue'
import AnimateTitle from './components/AnimationTitle.vue'
import imagesArticle from './components/imagesArticle.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './styles/index.css'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('imagesArticle', imagesArticle)
    useComponents(app)
    app.component(Button.name, Button)
    // app.component('ArcoVue', ArcoVue)
  },
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-info': () => h(AnimateTitle),
    })
  },
}
