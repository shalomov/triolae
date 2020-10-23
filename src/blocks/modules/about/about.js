$('.about-info_tabs a').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('.about-info_tabs a').removeClass('current-about');
    $('.about-tab_content').removeClass('current-about');

    $(this).addClass('current-about');
    $("#"+tab_id).addClass('current-about');
});