$(document).ready(function(){
	AOS.init();	
      var portfolioSlidesCount = $(".swiper-slide").length;
      var midSlide = Math.round(portfolioSlidesCount/2);
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopedSlides: 5,
      spaceBetween: 50,
      loopAdditionalSlides: 30,
      autoplay: {
          delay: 100000000000000,
      },
      pagination: {                       //pagination(dots)
         el: '.swiper-pagination',
         clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {

          767: {
              slidesPerView:3,
              spaceBetween: 30,
          },
          574: {
              slidesPerView:1,
              spaceBetween: 10,
          }
      }
    });

    mySwiper.on('transitionEnd', function() {
      console.log('*** mySwiper.realIndex', mySwiper.realIndex);
    });
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
});

