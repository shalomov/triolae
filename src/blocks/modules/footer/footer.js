$(document).ready(function() {


  $('input[type="checkbox"].form-control').change( function(){

    if ( $(this).attr('required') ) {

      if ( $(this).is(':checked', true) ) {
        $(this).next('label').removeClass('req-input');
      }
      else {
        $(this).next('label').addClass('req-input');
      }
    } 

  });

  $('#resume-add_cv').change( function(){

    if ( $(this).attr('required') ) {
      if ($('#resume-add_cv').length) {
        if ( $('#resume-add_cv').is(":invalid")  ) {
          $('.resume-cv_label').css('border-color','#dc3545');
        } else if ( $('#resume-add_cv').is(":valid")  ) {
            $('.resume-cv_label').css('border-color','#28a745');
        }
      }
        
    } 

  });

// $('.form-validation').submit(function (event) {

//     let $form = $(this);
//     event.preventDefault();
//     if ($($form)[0].checkValidity() === false) {
//         event.stopPropagation();
//         $($form).addClass('was-validated');
//         if ($('#resume-add_cv').length) {
//           if($('input[type="checkbox"].form-control').length) {
//             if ( $('input[type="checkbox"].form-control').is(":valid")  ) {
//               $('.was-validated input[type=checkbox].form-control + label').removeClass('req-input');
//             } else {
//               $('.was-validated input[type=checkbox].form-control + label').addClass('req-input');
//             }
//           }
//         }
//         // Attach your CV

//         if ($('#resume-add_cv').length) {
//           if ( $('#resume-add_cv').is(":invalid")  ) {
//             $('.resume-cv_label').css('border-color','#dc3545');
//           } else if ( $('#resume-add_cv').is(":valid")  ) {
//               $('.resume-cv_label').css('border-color','#28a745');
//           }
//         }
//         // Attach your CV end

//     } else {
//       $.ajax({
//         type: $form.attr('method'),
//         url: $form.attr('action'),
//         data: $form.serialize(),
//         success  : function () {
//           $form.removeClass('was-validated');
//         }
//       });
//     }
// });


$('input[type="email"]').attr("pattern", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");


$('.footer-contact_us').click(function(e){
    e.preventDefault();
    $('body').addClass('modal-active');
    $('.footer-modal').fadeIn();
    $(document).mouseup(function (e){
        var div = $(".footer-modal_wrapp");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) { 
            $('body').removeClass('modal-active');
            $('.footer-modal').fadeOut();
        }
    });

    $('.footer-modal_wrapp .modal-reg_close').click( function() {
        $('.footer-modal').fadeOut();
        $('body').removeClass('modal-active');
    });
});


// cookies

  $('.cookies').fadeIn();
  $('.cookies-agree').click( function(){
    $('.cookies').fadeOut();
  });

});

// cookies end

// callback
//  $('.callback-btn').click(function(){
//   $(this).toggleClass('active-callback_btn');
//   if ( $(this).hasClass('active-callback_btn') ) {
//     $('.callback-form_footer').toggle();
//     $('.callback-wrapp').toggleClass('active');
//     $('body').toggleClass('callback-active');
//   } else {
//     $('.callback-form_footer').hide();
//     $('.callback-wrapp').removeClass('active');
//     $('body').removeClass('callback-active');
//   }
  
//  });

//  $(document).mouseup(function (e){
//   var div = $(".callback");
//   if (!div.is(e.target)
//       && div.has(e.target).length === 0) { 
//         $('.callback-form_footer').hide();
//         $('.callback-wrapp').removeClass('active');
//         $('body').removeClass('callback-active');
//         $('.callback-btn').removeClass('active-callback_btn');
//   }
// });


// callback /


// contact us 


$('.callback').on('click', function(){
  
  let windowWidth = $(window).width();
  $('body').addClass('callback-active');
  $('.contacts-aside').width(windowWidth);
  $('.contacts-aside').addClass('mobile-menu');
});

$('.minimize').on('click', function(){
  $('body').removeClass('callback-active');
  $('.contacts-aside').removeClass('mobile-menu');
  $('.contacts-aside').removeAttr("style")
})


// contact us /