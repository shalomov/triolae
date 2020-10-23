$('.our-projects li').click( function() {
    $('.our-projects li').removeClass('active-project');
    $(this).addClass('active-project');
});

$(' .desc-info .main-link').click(function(e){
    e.preventDefault();
    $('.footer-form').addClass('d-block');
    $('body').addClass('implementations-modal');
});

$('.modal-imp_close').click(function(){
    $('.footer-form').removeClass('d-block');
    $('body').removeClass('implementations-modal');
    $('.block-form').removeClass('hide-block_form');
    $('.callback-form').removeClass('callback-active');
});


$(document).mouseup(function (e){
    var div = $(" .block-form , .callback-form");
    if (!div.is(e.target)
        && div.has(e.target).length === 0 ) {
            $('.footer-form').removeClass('d-block');
            $('body').removeClass('implementations-modal');
            $('.block-form').removeClass('hide-block_form');
            $('.callback-form').removeClass('callback-active');
        } 
});

$('.footer-form_btn.call-me').click(function(e){
    $('.block-form').addClass('hide-block_form');
    $('.callback-form').addClass('callback-active');
});