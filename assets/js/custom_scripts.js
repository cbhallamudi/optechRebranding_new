$(document).ready(function(){
	AOS.init();	
    
});
var slider1 = new Swiper ('.slider1', {
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 15,
    // loop: true,
    // center: true,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      350: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 3
      },  
      1200: {
        slidesPerView: 4
      }
    },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

var slider2 = new Swiper ('.slider2', {
    loop: true,
    center: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      600: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 2
      },
      1270: {
        slidesPerView: 3
      }
    },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
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

// var container = document.getElementById('services_container')
// var slider = document.getElementById('slider');
// var slides = document.getElementsByClassName('slide').length;
// var buttons = document.getElementsByClassName('btn');


// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 1;
//         } else {
//             if (w < 1101) {
//                 slidesPerPage = 3;
//             } else {
//                 slidesPerPage = 3;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }

// setParams();

// function slideRight() {
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };

// function slideLeft() {
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };

