import Swiper from 'swiper/bundle'

function universityArticleSlider() {
	new Swiper('.university-article-intro__slider', {
		navigation: {
			prevEl: '.university-article-prev',
			nextEl: '.university-article-next',
		},

		loop: true,
		autoplay: true,
	})
}

export default universityArticleSlider
