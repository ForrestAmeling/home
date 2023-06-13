$(document).ready(function () {


	$("#portfolio-contant-active").mixItUp();


	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('nav').addClass('navbar-shrink');
		} else {
			$('nav').removeClass('navbar-shrink');
		}
	});



	// Counter

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


});




