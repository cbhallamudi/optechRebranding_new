$(document).ready(function(){
	AOS.init();	
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").removeClass("bg-transparent-transition");
        $(".navbar").addClass("bg-white-transition");
    } else {
        $(".navbar").removeClass("bg-white-transition");
        $(".navbar").addClass("bg-transparent-transition");
    }
});

$('.owl-carousel').owlCarousel({
    // center:true,
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:3
        },
        992:{
            items:4
        }
    },
    navText:['<i class="fa-solid fa-caret-left"></i>','<i class="fa-solid fa-caret-right"></i>']
})

