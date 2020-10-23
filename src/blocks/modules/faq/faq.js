$('.faq-title').click(function(){

    if (  $(this).next('.faq-content').is(":visible") ) {
        $(this).removeClass('active-faq');
    } else if (  $(this).next('.faq-content').is(":hidden") ) {
        $(this).addClass('active-faq');
    }   

});