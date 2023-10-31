import accordion from './modules/accordion'
import showContent from './modules/base'
import mobileMenu from './modules/menu'
import professionsLink from './modules/professions'
import relatedSlider from './modules/related-slider'
import relatedUniversities from './modules/related-universities'
import studentsSlider from './modules/students-slider'
import topArticlesSlider from './modules/top-articles-slider'
import universityArticleSlider from './modules/university-article-slider'

import 'swiper/css/bundle'

document.addEventListener('DOMContentLoaded', () => {
	showContent()
	professionsLink()
	accordion()
	mobileMenu()

	relatedSlider()
	topArticlesSlider()
	relatedUniversities()
	studentsSlider()
	universityArticleSlider()
})
