$(document).ready(function(){
	AOS.init();	
  $('#spanYear').html(new Date().getFullYear());
  $("a.nav-link").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    }); 

  $("button.nav-link").click(function(){

    var buttonId = $(this).attr("id"); 

    $(".dropdown-tab-pane").removeClass("fa-square-caret-down");
    $(".dropdown-tab-pane").addClass("fa-square-caret-right");
    $("#"+buttonId+"_fa").removeClass("fa-square-caret-right fa-square-caret-down");
    $("#"+buttonId+"_fa").addClass("fa-square-caret-right fa-square-caret-down");
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))   
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
        slidesPerView: 3
      },
      1270: {
        slidesPerView: 3
      }
    },
    on: {
        realIndexChange: function () {
          let index = this.realIndex + 1; /* slide 1 => slides[1] */
          let current_title = this.slides[index].dataset.title;
          let current_desc = this.slides[index].dataset.desc;
          $("#swiper_dynamic_title").text(current_title);
          $("#swiper_dynamic_content").text(current_desc);
        },
      }

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

// slider2.on('transitionEnd', function() {
//   console.log('*** slider2.realIndex', slider2.realIndex);
// });

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

$("#inverseColors").click(function(){
  $("html").toggleClass("inverse-class");
})