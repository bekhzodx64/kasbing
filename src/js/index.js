import accordion from './modules/accordion'
import showContent from './modules/base'
import professionsLink from './modules/professions'
import relatedSlider from './modules/related-slider'
import topArticlesSlider from './modules/top-articles-slider'

import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
	showContent()
	professionsLink()
	accordion()
	relatedSlider()
	topArticlesSlider()
})
