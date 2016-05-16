$(function() {



	// add active class on click
	$('.navbar-nav li').each(function(){
		$('.navbar-nav li a').on('click', function(){
			$('.navbar-nav li').removeClass('active');
			$(this).parent().addClass('active');
		});
	});

	// Hide nav on click on mobile
	$('.navbar-nav li a').click(function(){
		$('.navbar-collapse').removeClass("in");
	});
});

$(document).ready(function () {

new WOW().init();

	$(document).on("scroll", onScroll);

	// add active class on scroll
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.navbar-nav li').each(function () {
	        var currLink = $(this).children();
	        var refElement = $(currLink.attr("href"));

	        if (refElement.position().top <= scrollPos + 80 && refElement.position().top + refElement.outerHeight() > scrollPos + 80) {
	            $('.navbar-nav li').removeClass("active");
	            currLink.parent().addClass("active");
	        }
	        else{
	            currLink.parent().removeClass("active");
	        }
	    });
	}
});