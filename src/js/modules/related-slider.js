import Swiper from 'swiper'

function relatedSlider() {
	new Swiper('.related-slider', {
		slidesPerView: 1.1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 1.5,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2.2,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 3,
			},
		},
	})
}

export default relatedSlider
