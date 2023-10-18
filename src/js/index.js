import accordion from './modules/accordion'
import showContent from './modules/base'
import professionsLink from './modules/professions'

document.addEventListener('DOMContentLoaded', () => {
	showContent()
	professionsLink()
	accordion()
})
