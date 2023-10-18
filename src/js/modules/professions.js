function professionsLink() {
	const links = document.querySelectorAll('.professions-content__link')

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()

			links.forEach((element) => {
				element.classList.remove('active')
			})
			link.classList.add('active')
		})
	})
}

export default professionsLink
