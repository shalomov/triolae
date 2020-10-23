
$('.reviews-slider').slick({
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  rtl: true
});

  $('.form-register-teasier-tabs a').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('.form-register-teasier-tabs a').removeClass('current-teasier_reg');
    $('.tab-signin_teasier__content').removeClass('current-teasier_reg');

    $(this).addClass('current-teasier_reg');
    $("#"+tab_id).addClass('current-teasier_reg');
});

$('.forgot-pass_teasier').click(function(event){
  event.preventDefault();
  $('.wrapp-form_reset__teasier').addClass('show-modal_reset ');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
});

// сообщение "Успешная регистрация в Тизер"
function successNewAcc() {
  $('.success-message_teasier__reg').addClass('success-reg_teasier__show');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
}
// сообщение "Успешная регистрация в Тизер" /

// сообщение "перейдите по ссылке в почте"
function msgResetPass() {
  $('.success-message_teasier').addClass('success-message_send__teasier');
  $('.wrapp-form_reset__teasier').removeClass('show-modal_reset');
}
// сообщение "перейдите по ссылке в почте" /

// после перехода по ссылке в почте
function newPass() {
  $('.wrapp-form_newpass__teasier').addClass('wrapp-form_newpass__show');
  $('.wrapp-forms_teasier').addClass('forms-teasier_hide');
}
// после перехода по ссылке в почте /

// пароль сброшен
function successNewPass() {
  $('.newpass-message_teasier').addClass('show-modal_reset');
}
// пароль сброшен /




    // modal subscribe

  //   $('.teasier-btn_win').click( function() {

  //     function subscribeModal(){
  //         $('.subscribe-modal').addClass('d-flex');
  //         $('body').addClass('subscribe-modal_active');
  //       }
  //       setTimeout(subscribeModal, 2000);

  // });

    
  $(document).mouseup(function (e){
    var div = $(".wrapp-content_subscribe");
    if (!div.is(e.target)
        && div.has(e.target).length === 0 ) {
          $('body').removeClass('subscribe-modal_active');
          $('.subscribe-modal').removeClass('d-flex');
        } 
  });



  // modal teasier reg

$('.modal-reg_teasier__btn').click( function() {

  $('.modal-teasier_reg__wrapp').addClass('modal-teasier_active');
  $('body').addClass('teasier-reg_modal__active');

  $(document).mouseup(function (e){
    var div = $(".modal-teasier_reg");
    if (!div.is(e.target)
        && div.has(e.target).length === 0 ) {
          $('.modal-teasier_reg__wrapp').removeClass('modal-teasier_active');
          $('body').removeClass('teasier-reg_modal__active');
          $('.wrapp-form_reset__teasier').removeClass('show-modal_reset ');
          $('.wrapp-forms_teasier').removeClass('forms-teasier_hide');
          $('.success-message_teasier').removeClass('success-message_send__teasier');
          $('.wrapp-form_newpass__teasier').removeClass('wrapp-form_newpass__show');
          $('.newpass-message_teasier').removeClass('show-modal_reset');
          $('body').removeClass('subscribe-modal_active');
          $('.subscribe-modal').removeClass('d-flex');
          $('.success-message_teasier__reg').removeClass('success-reg_teasier__show');
        } 
  });


  return false;
});

$('.modal-reg_teasier__close').click( function() {
  $('.modal-teasier_reg__wrapp').removeClass('modal-teasier_active');
  $('body').removeClass('teasier-reg_modal__active');
  $('.wrapp-form_reset__teasier').removeClass('show-modal_reset ');
  $('.wrapp-forms_teasier').removeClass('forms-teasier_hide');
  $('.success-message_teasier').removeClass('success-message_send__teasier');
  $('.wrapp-form_newpass__teasier').removeClass('wrapp-form_newpass__show');
  $('.newpass-message_teasier').removeClass('show-modal_reset');
  $('.success-message_teasier__reg').removeClass('success-reg_teasier__show');
});

$('.forgot-pass_link').click(function(e){
e.preventDefault();
$('.reset-wrapp').css('display','flex');
$('.go-back').click(function(e){
  e.preventDefault();
  $('.reset-wrapp').css('display','none');
});
});

// modal teasier reg end

  // modal subscribe /