
	$(document).ready(function(){
	  $('.slider__wrapper').slick({
		  dots: true,
		  infinite: true,
		  speed: 1000,
			autoplaySpeed: 5000,
		  fade: true,
		  cssEase: 'linear',
			autoplay: true,
			mobileFirst: true

		});
	});


	$(document).ready(function() {
			$('.burger').click(function(event) {
				$('.burger, .menu').toggleClass('active');
			});
});
