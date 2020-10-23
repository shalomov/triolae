$('.direction-jobs ul li').click( function() {
    $('.direction-jobs ul li').removeClass('active-position');
    $(this).addClass('active-position');
});

$('.job-item').click( function() {
    $(this).toggleClass('active-job_item');
    $(this).next().toggle();
});


// attach cv
  
// ;( function( $, window, document, undefined )
// {
// 	$( '.resume-add_cv' ).each( function()
// 	{
// 		var $input	 = $( this ),
// 			$label	 = $input.next( 'label' ),
// 			labelVal = $label.html();

// 		$input.on( 'change', function( e )
// 		{
// 			var fileName = '';

// 			if( this.files && this.files.length > 1 )
// 				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 			else if( e.target.value )
// 				fileName = e.target.value.split( '\\' ).pop();

// 			if( fileName )
// 				$label.find( 'span' ).html( fileName );
// 			else
// 				$label.html( labelVal );
// 		});

// 		$input
// 		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
// 		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
// 	});
// })( jQuery, window, document );


// attach cv end 

$('.slider-career').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 3000,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows : false,
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  });


$('.slider-success').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  });

  $('.co-worker-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: true,
    arrows : true,
    autoplaySpeed: 3000,
    rtl: true,
    prevArrow: $('.prev-co_worker'),
    nextArrow: $('.next-co_worker'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          autoplay: true,
        }
      }
    ]
  });