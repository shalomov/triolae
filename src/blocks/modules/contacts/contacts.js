$('.contacts-info_tabs a').click(function(e){
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');

    $('.contacts-info_tabs a').removeClass('current-contacts');
    $('.contacts-tab_content').removeClass('current-contacts');

    $(this).addClass('current-contacts');
    $("#"+tab_id).addClass('current-contacts');
});


$('.contacts-tab_content .cont-modal').click(function(e){
    // hidden input

    $('#fperson').val($(this).closest('.contact-item_tabs').find('h3').text());
    $('#fperson_email').val($(this).closest('.contact-item_tabs').find('.person-email').val()); 
    // hidden input end
});

$('.cont-modal').click(function(e){
    e.preventDefault();
    let target = $( e.target );
    let authorName = target.siblings('h3').text();

    $('.contacts-modal .message-to').text(authorName);

    $('body').addClass('cont-modal-active');
    $('.contacts-modal').fadeIn();

    $(document).mouseup(function (e){
        var div = $(".contacts-modal_wrapp");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) { 
            $('body').removeClass('cont-modal-active');
            $('.contacts-modal').fadeOut();
        }
    });

    $('.contacts-modal_wrapp .modal-reg_close').click( function() {
        $('.contacts-modal').fadeOut();
        $('body').removeClass('cont-modal-active');
    });
});
