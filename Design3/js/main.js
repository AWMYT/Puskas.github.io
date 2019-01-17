/*global $, window*/

$(function () {
	
	'use strict';
	// Adjust Slider Height
	
	var windowH = $(window).height(),
		upperbarH = $('.upper-bar').innerHeight(),
		navbarH = $('.navbar').innerHeight();
	
	
	$('.silder, .carousel-item').height(windowH - (upperbarH + navbarH));
	
	
	// shuffle-images .Featured-Work ul li
	
	$('.Featured-Work ul li').on('click', function () {
		
		$(this).addClass('active').siblings().removeClass('active');
		
		if ($(this).data('class') === 'all') {
			
			$('.shuffle-images .col-md').css('opacity', '1');
			
		} else {
			
			$('.shuffle-images .col-md').css('opacity', '.08');
			$($(this).data('class')).parent().css('opacity', '1');
		}
		
	});
});