$(function() {
// offset
    smoothScroll.init({
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 79,
        updateURL: false,
        callbackBefore: function(toggle, anchor) {},
        callbackAfter: function(toggle, anchor) {}
    });


	// Hide nav on click on mobile
	$('.navbar-nav li a').click(function(){
		$('.navbar-collapse').removeClass("in");
	});
});

$(document).ready(function () {

// wowjs initialize
new WOW().init();

// scroll
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