import Theme from 'vitepress/theme'
import { h } from 'vue'
import AnimateTitle from './components/AnimationTitle.vue'
import imagesArticle from './components/imagesArticle.vue'

export default {
	...Theme,
	enhanceApp({ app }) {
		app.component('imagesArticle', imagesArticle)
		// app.component('ArcoVue', ArcoVue)
	},
	Layout() {
		return h(Theme.Layout, null, {
			'home-hero-info': () => h(AnimateTitle)
		})
	}
}
