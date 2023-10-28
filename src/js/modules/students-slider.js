import Swiper from 'swiper'

function studentsSlider() {
	new Swiper('.students-slider', {
		slidesPerView: 1.5,
		spaceBetween: 30,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 3,
			},
		},
	})
}

export default studentsSlider
