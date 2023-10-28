import Swiper from 'swiper'

function relatedUniversities() {
	new Swiper('.related-universities__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			640: {
				slidesPerView: 1.4,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 1.6,
			},
			1024: {
				centeredSlides: false,
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 3,
			},
		},
	})
}

export default relatedUniversities
