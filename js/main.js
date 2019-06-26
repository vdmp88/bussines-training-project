$(function(){


// wow init
new WOW().init();

// slider 
$('.slider').slick({
    dots: true,
    speed: 500,
    infinite: true,
    cssEase: 'linear',
    fade: true,
    arrows: false
});

$('.humburger').click(function(){
	$('.nav ul').slideToggle();

});


// Scroll to elem

const scrollBtn = $('[data-scroll]');

function onScroll(e) {
	e.preventDefault();
	let target = $(this).attr('data-scroll');
	let dist = $(target).offset().top;
	
		if ( $('.nav ul').css('display') === 'block' ) {
	    $('.nav ul').slideUp();
	}
	
	$('html, body').animate({scrollTop: dist}, 1000, 'swing');
	
}

scrollBtn.on('click', onScroll);

});







// header

let header = document.querySelector("#fixedHeader");
let fixed = header.offsetHeight;

window.addEventListener("scroll", function(e) {
    fixedHeader();
});

function fixedHeader() {
    if ( window.pageYOffset >= fixed + 400 ) {
        header.classList.add("fixed");
        header.classList.add("show");

    } else {
        header.classList.remove("fixed");
        header.classList.remove("show");
    }
  }