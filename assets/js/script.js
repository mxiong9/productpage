$(document).ready(function() {

	// Specs
	$('.spec-box').hide();

	// Masonry

	$('img').load(function(){
        $("#grid").masonry();
    });

	var $tiles = $('#grid').masonry({
		columnWidth: 110,
		itemSelector: '.grid-item'
	});

	// Navigation Bar
	$(window).scroll(function() {
		var height = $(window).scrollTop();

		if (height > 80) {
			$('.navbar-active').slideDown(400);
		}

		else {
			$('.navbar-active').slideUp(400);
		}
	});

	//Filter Pages

	$('#overview').addClass('color-change');

	$('#overview').click(function() {

		$('#grid-item1').show();
		$('#grid-item2').show();
		$('#grid-item3').show();
		$('#grid-item4').show();
		$('#grid-item5').show();
		$('#grid-item6').show();
		$('.spec-box').hide();
		$tiles.masonry();

		$('#grid-item4').css("margin-top", "15px");
		$('#grid-item5').css("margin-top", "15px");
		$('#grid-item6').css("margin-top", "15px");
		if ($('.bold-bar').hasClass('listings-left')) {
			$('.bold-bar').removeClass('listings-left');
		};
		if ($('.bold-bar').hasClass('stories-left')) {
			$('.bold-bar').removeClass('stories-left');
		};
		if ($('.bold-bar').hasClass('videos-left')) {
			$('.bold-bar').removeClass('videos-left');
		};
		if ($('.bold-bar').hasClass('specs-left')) {
			$('.bold-bar').removeClass('specs-left');
		};
		$('.bold-bar').addClass('overview-left');

		if ($('#listings').hasClass('color-change')) {
			$('#listings').removeClass('color-change');
		};
		if ($('#stories').hasClass('color-change')) {
			$('#stories').removeClass('color-change');
		};
		if ($('#videos').hasClass('color-change')) {
			$('#videos').removeClass('color-change');
		};
		if ($('#specs').hasClass('color-change')) {
			$('#specs').removeClass('color-change');
		};
		if ($('#overview').hasClass('color-blue')) {
			$('#overview').removeClass('color-blue');
		};
		$('#overview').addClass('color-change');
	});

	$('#listings').click(function() {

		$('#grid-item1').show();
		$('#grid-item2').hide();
		$('#grid-item3').hide();
		$('#grid-item4').hide();
		$('#grid-item5').hide();
		$('#grid-item6').hide();
		$('.spec-box').hide();
		$tiles.masonry();

		if ($('.bold-bar').hasClass('overview-left')) {
			$('.bold-bar').removeClass('overview-left');
		};
		if ($('.bold-bar').hasClass('stories-left')) {
			$('.bold-bar').removeClass('stories-left');
		};
		if ($('.bold-bar').hasClass('videos-left')) {
			$('.bold-bar').removeClass('videos-left');
		};
		if ($('.bold-bar').hasClass('specs-left')) {
			$('.bold-bar').removeClass('specs-left');
		};
		$('.bold-bar').addClass('listings-left');

		if ($('#overview').hasClass('color-change')) {
			$('#overview').removeClass('color-change');
		};
		if ($('#stories').hasClass('color-change')) {
			$('#stories').removeClass('color-change');
		};
		if ($('#videos').hasClass('color-change')) {
			$('#videos').removeClass('color-change');
		};
		if ($('#specs').hasClass('color-change')) {
			$('#specs').removeClass('color-change');
		};
		$('#overview').addClass('color-blue');
		$('#listings').addClass('color-change');
	});

	$('#stories').click(function() {

		$('#grid-item1').hide();
		$('#grid-item2').hide();
		$('#grid-item3').hide();
		$('#grid-item4').show();
		$('#grid-item5').show();
		$('#grid-item6').show();
		$('.spec-box').hide();
		$tiles.masonry();
		$('#grid-item4').css("margin-top", "0px");
		$('#grid-item5').css("margin-top", "0px");
		$('#grid-item6').css("margin-top", "0px");

		if ($('.bold-bar').hasClass('overview-left')) {
			$('.bold-bar').removeClass('overview-left');
		};
		if ($('.bold-bar').hasClass('listings-left')) {
			$('.bold-bar').removeClass('listings-left');
		};
		if ($('.bold-bar').hasClass('videos-left')) {
			$('.bold-bar').removeClass('videos-left');
		};
		if ($('.bold-bar').hasClass('specs-left')) {
			$('.bold-bar').removeClass('specs-left');
		};
		$('.bold-bar').addClass('stories-left');

		if ($('#overview').hasClass('color-change')) {
			$('#overview').removeClass('color-change');
		};
		if ($('#listings').hasClass('color-change')) {
			$('#listings').removeClass('color-change');
		};
		if ($('#videos').hasClass('color-change')) {
			$('#videos').removeClass('color-change');
		};
		if ($('#specs').hasClass('color-change')) {
			$('#specs').removeClass('color-change');
		};
		$('#overview').addClass('color-blue');
		$('#stories').addClass('color-change');
	});

	$('#videos').click(function() {

		$('#grid-item1').hide();
		$('#grid-item2').show();
		$('#grid-item3').show();
		$('#grid-item4').hide();
		$('#grid-item5').hide();
		$('#grid-item6').hide();
		$('.spec-box').hide();
		$tiles.masonry();

		if ($('.bold-bar').hasClass('overview-left')) {
			$('.bold-bar').removeClass('overview-left');
		};
		if ($('.bold-bar').hasClass('stories-left')) {
			$('.bold-bar').removeClass('stories-left');
		};
		if ($('.bold-bar').hasClass('listings-left')) {
			$('.bold-bar').removeClass('listings-left');
		};
		if ($('.bold-bar').hasClass('specs-left')) {
			$('.bold-bar').removeClass('specs-left');
		};
		$('.bold-bar').addClass('videos-left');

		if ($('#overview').hasClass('color-change')) {
			$('#overview').removeClass('color-change');
		};
		if ($('#stories').hasClass('color-change')) {
			$('#stories').removeClass('color-change');
		};
		if ($('#listings').hasClass('color-change')) {
			$('#listings').removeClass('color-change');
		};
		if ($('#specs').hasClass('color-change')) {
			$('#specs').removeClass('color-change');
		};
		$('#overview').addClass('color-blue');
		$('#videos').addClass('color-change');
	});

	$('#specs').click(function() {

		$('#grid-item1').hide();
		$('#grid-item2').hide();
		$('#grid-item3').hide();
		$('#grid-item4').hide();
		$('#grid-item5').hide();
		$('#grid-item6').hide();
		$('.spec-box').show();

		if ($('.bold-bar').hasClass('overview-left')) {
			$('.bold-bar').removeClass('overview-left');
		};
		if ($('.bold-bar').hasClass('stories-left')) {
			$('.bold-bar').removeClass('stories-left');
		};
		if ($('.bold-bar').hasClass('listings-left')) {
			$('.bold-bar').removeClass('listings-left');
		};
		if ($('.bold-bar').hasClass('videos-left')) {
			$('.bold-bar').removeClass('videos-left');
		};
		$('.bold-bar').addClass('specs-left');

		if ($('#overview').hasClass('color-change')) {
			$('#overview').removeClass('color-change');
		};
		if ($('#stories').hasClass('color-change')) {
			$('#stories').removeClass('color-change');
		};
		if ($('#listings').hasClass('color-change')) {
			$('#listings').removeClass('color-change');
		};
		if ($('#videos').hasClass('color-change')) {
			$('#videos').removeClass('color-change');
		};
		$('#overview').addClass('color-blue');
		$('#specs').addClass('color-change');
	});


	// Carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplaySpeed: 900,
		autoplayTimeout: 5500,
		dotsSpeed: 500,
		dragEndSpeed: 800,
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel(); 

	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel', [500]);
	});

	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel', [500]);
	});

});