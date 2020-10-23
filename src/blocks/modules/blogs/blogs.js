$('.direction-blogs ul li').click( function() {
    $('.show-all_btn').removeClass('active')
    $('.direction-blogs ul li').removeClass('active-position');
    $(this).addClass('active-position');
});

$('.show-all_btn').click( function (e) {
    e.preventDefault();
    $('.show-all_btn').addClass('active')
    $('.direction-blogs ul li').removeClass('active-position');
});

if ( $('li').hasClass('active-position') ) {
    $('.show-all_btn').removeClass('active');
}