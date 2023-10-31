function mobileMenu() {
	const body = document.querySelector('body')
	const hamburger = document.querySelector('.hamburger')
	const menu = document.querySelector('.menu')

	hamburger.addEventListener('click', () => {
		if (!body.classList.contains('no-scroll')) {
			body.classList.add('no-scroll')
		} else {
			body.classList.remove('no-scroll')
		}

		if (!menu.classList.contains('show')) {
			menu.classList.add('show')
		} else {
			menu.classList.remove('show')
		}
	})

	menu.addEventListener('click', (e) => {
		const target = e.target

		if (target.classList.contains('menu')) {
			document.body.classList.remove('no-scroll')
			menu.classList.remove('show')
		}
	})
}

export default mobileMenu
