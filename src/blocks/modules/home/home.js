$(document).ready(function(){


    $('.main-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: false,
        arrows : true,
        autoplay: true,
        rtl: true,
        prevArrow: $('.prev-slide_main'),
        nextArrow: $('.next-slide_main'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              arrows : false,
            },
            breakpoint: 767, 
            settings: {
              autoplay: false,
              adaptiveHeight: true
            },
          }
        ]
      });
  

});