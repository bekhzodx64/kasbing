import Swiper from 'swiper'

function topArticlesSlider() {
	new Swiper('.top-articles__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			640: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 3,
			},
			1280: {
				slidesPerView: 4,
			},
		},
	})
}

export default topArticlesSlider
