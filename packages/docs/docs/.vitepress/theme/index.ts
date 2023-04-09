import Theme from 'vitepress/theme'
import navBarContentBefore from './components/navBarContentBefore.vue'
// import { VPTheme } from '@vue/theme'
import { h } from 'vue'
import AnimateTitle from './components/AnimationTitle.vue'
import imagesArticle from './components/imagesArticle.vue'
import EleimagesArticle from './components/EleimagesArticle.vue'
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
    app.component('EleimagesArticle', EleimagesArticle)
    app.component('demo-preview', AntDesignContainer)
  },
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-info': () => h(AnimateTitle),
      'aside-top': () => h('div', '可用`aside-top`'),
      'aside-bottom': () => h('div', { style: { height: '300px' } }, '可用Sponsors'),
      'nav-bar-content-before': () => h(navBarContentBefore)
      // 'nav-bar-title-before': () => h('div', '可用`nav-screen-content-before`'),
      // 'nav-bar-title-after': () => h('div', '可用`nav-bar-title-after`'),
      // 'nav-bar-content-before': () => h('div', '可用`nav-bar-content-before`'),
      //'nav-bar-content-after': () => h(mylayout)
    })
  }
}
