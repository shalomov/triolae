

  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.slider-authors').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        dots: false,
        arrows : false,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
      });
    
  } 

  $('.latest-blogs').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: true,
    arrows : false,
    autoplaySpeed: 3000,
    autoplay: true,
    rtl: true,
  });