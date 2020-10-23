
$('.burger-toggle').click(function(){
    $(this).toggleClass('active-burger');
    $('.header-sublist').removeClass('show-sublist');
    $('.region-list a i').removeClass('rotate-i');
    $('.header-list').slideToggle(200).toggleClass('opened');
});


$('.search-btn').click(function(e){
    e.preventDefault();
    $('.overlay').css('display','flex');
    $('body').addClass('search-modal-active');
});

$('.clear-img').click(function(){
    $('.overlay').css('display','none');
    $('.search-form')[0].reset();
    $('body').removeClass('search-modal-active');
    $('#autocomplete-results div , #autocomplete-results p').remove();
    $('#autocomplete-results').removeClass('ss-search-form__results--visible');
    $('.search-form')[0].reset();
});


$(document).mouseup(function (e){
    var div = $(".search-wrapp");
    if (!div.is(e.target)
        && div.has(e.target).length === 0 ) {
            $('.overlay').css('display','none');
            $('body').removeClass('search-modal-active');
            $('#autocomplete-results div, #autocomplete-results p').remove();
            $('#autocomplete-results').removeClass('ss-search-form__results--visible');
            $('.search-form')[0].reset();
        } 
});




$('.tabs a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs a').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});



$('.lines-info_tabs a').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('.lines-info_tabs a').removeClass('current-lines');
    $('.lines-tab_content').removeClass('current-lines');

    $(this).addClass('current-lines');
    $("#"+tab_id).addClass('current-lines');
});

$('.form-register-tabs a').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('.form-register-tabs a').removeClass('current-reg');
    $('.tab-register_content').removeClass('current-reg');

    $(this).addClass('current-reg');
    $("#"+tab_id).addClass('current-reg');
});


if($(window).width() < 991) {

    $('.header-list > li > a').click(function(e){

        $(this).next('.header-sublist').toggleClass('show-sublist');

		if ( $('.header-list > li > .show-sublist').length > 1 ) {
            $('.header-list > li > a').next('.header-sublist').removeClass('show-sublist');
            $('.region-list > a > i').removeClass('rotate-i');
            $(this).next('.header-sublist').toggleClass('show-sublist');
		}

    });


    $('.region-list > a').click( function() {
        $(this).find('i').toggleClass('rotate-i');
    });

    $('.header-list .hide-sublist > .header-sublist').remove();

}

$('select').niceSelect();


$('.sticky-nav_list .nav-link, .makeorder').bind('click.smoothscroll', function(event) {

    event.preventDefault();
    
    var target = this.hash,
    $target = $(target);
    
    if($(window).width() >= 767) {
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 900, 'swing');
    } else if ( $(window).width() >= 320 ) {
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 900, 'swing');
    }
    
});

    // modal reg

    // if ($('.modal-reg').length !== 0 ) {
    //     $('.dwnld-link , .login-btn , .product-info .dwld-btn , .about-info .page-btn').click( function() {
    // }


        $('.login-btn').click( function() {
            $('.modal-reg').fadeIn();
            $('body').addClass('reg-modal-active');

            $(document).mouseup(function (e){
              var div = $(".register-wrapp");
              if (!div.is(e.target)
                  && div.has(e.target).length === 0 ) {
                      
                    hideModal();

                    $('body').removeClass('reg-modal-active');
                  } 
            });

          
            return false;
        });
        
        $('.modal-reg_close').click( function() {
            hideModal();
            $('body').removeClass('reg-modal-active');
        });
    




    $('.forgot-pass_link').click(function(e){
        e.preventDefault();
        $('.reset-wrapp').css('display','flex');
        $('.go-back').click(function(e){
            e.preventDefault();
            $('.reset-wrapp').css('display','none');
        });
    });


// modal reg end

    // modal functions

    // function successSendResetPass() {
    //     $('.success-form_row').css('display','flex');
    //     $('.reset-form_row').css('display','none');

    //     setTimeout(hideModal, 2000);
    // }


    // function createNewPass() {
    //     $('.new-pass_wrapp').css('display','flex');
    //     $('.new-pass_row').css('display','flex');
    //     $('.success-pass_row').css('display','none');
    //     $('.modal-reg').fadeIn();
    //     $('body').addClass('reg-modal-active');
    // }


    // function successPass() {
    //     $('.new-pass_wrapp').css('display','flex');
    //     $('.new-pass_row').css('display','none');
    //     $('.success-pass_row').css('display','flex');

    //     setTimeout(hideModal, 2000);

    //     setTimeout(function () {
    //         location = location.origin + location.pathname + '?to_auth=true';
    //     },2500);
    // }

    // function successCreateAcc() {
    //     $('.new-acc_wrapp').css('display','flex');

    //     setTimeout(hideModal, 2000);
    // }

    function hideModal (){
        $('.modal-reg').fadeOut("slow", function(){
            $(".register-wrapp div").removeAttr("style");
        });
    }

    // modal functions end

    