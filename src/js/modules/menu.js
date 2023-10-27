function mobileMenu() {
	const hamburger = document.querySelector('.hamburger')
	const menu = document.querySelector('.menu')

	hamburger.addEventListener('click', () => {
		document.body.classList.toggle('no-scroll')
		menu.classList.toggle('show')
	})

	menu.addEventListener('click', () => {
		document.body.classList.toggle('no-scroll')
		menu.classList.toggle('show')
	})
}

export default mobileMenu
