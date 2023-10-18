function accordion() {
	const cards = document.querySelectorAll('.faq-card')

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			if (card.classList.contains('show')) {
				card.classList.remove('show')
			} else {
				cards.forEach((element) => {
					element.classList.remove('show')
				})
				card.classList.add('show')
			}
		})
	})
}

export default accordion
